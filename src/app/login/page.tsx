"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SiGithub, SiGoogle } from "react-icons/si";

const supabase = createClient();

const githubSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: "/login",
    },
  });
  console.log(data, error);
};

const googleSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: "/login",
    },
  });
  console.log(data, error);
};

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error(error);
      router.push(`/?error=${error.message}`);
    } else if (data) {
      if (data?.session === null) {
        setLoading(false);
      }

      console.log(data.session?.user);
      if (data.session?.user) {
        router.push("/?loggedIn=true");
      }
    }
  };

  useEffect(() => {
    getSession();
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen p-2">
      {loading && (
        <Loader className="size-12 text-muted-foreground animate-spin" />
      )}

      {!loading && (
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <Image
                className="size-16 object-cover dark:invert mx-auto"
                height={512}
                width={512}
                src={"/logo.png"}
                alt="logo"
              />
              <h1 className="text-3xl font-bold tracking-tighter mt-2">
                Login to DevPillar
              </h1>
              <p className="text-balance text-muted-foreground tracking-tight">
                Sign in with your account to continue.
              </p>
            </div>
            <div className="grid gap-4">
              <Button variant={"white"} onClick={githubSignIn}>
                <SiGithub className="size-5 mr-2" />
                Login with Github
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={googleSignIn}
              >
                <SiGoogle className="size-4 mr-2" />
                Login with Google
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
