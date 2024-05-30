"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Loader, LogIn, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { closeSheet } from "./sidebar";

const supabase = createClient();

export const LoginButton = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  const fetchSession = async () => {
    const session = await supabase.auth.getSession();

    if (session.data) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <>
      {loading ? (
        <Button
          className={cn("w-full animate-pulse", className)}
          variant={"outline"}
          disabled
        >
          <Loader className="h-5 w-5 animate-spin mr-2" />
          Loading...
        </Button>
      ) : null}
      {isAuth === false ? (
        <Button
          variant={"outline"}
          className={cn("w-full", className)}
          size={"sm"}
          asChild
        >
          <Link
            id="signInLink"
            className="flex items-center gap-2"
            href={"/login"}
          >
            <LogIn className=" h-5 w-5 rotate-180" />
            Sign In
          </Link>
        </Button>
      ) : (
        isAuth === true && (
          <Button
            variant={"outline"}
            className={cn("w-full", className)}
            size={"sm"}
            asChild
          >
            <Link
              id="profileLink"
              className="flex items-center gap-2"
              href={"/profile"}
              onClick={closeSheet}
            >
              <User className=" h-5 w-5" />
              Profile
            </Link>
          </Button>
        )
      )}
    </>
  );
};
