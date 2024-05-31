"use client";

import { ResourceCard } from "@/components/resource-card";
import RouteHeading from "@/components/route-heading";
import { Button } from "@/components/ui/button";
import { resources } from "@/lib/resources";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const supabase = createClient();

const Profile = () => {
  const router = useRouter();

  const [favs, setFavs] = useState<string[]>([]);
  const [sort, setSort] = useState<"A-Z" | "Z-A">("A-Z");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const getUserFavs = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from("userFavs")
        .select("*")
        .eq("email", user.email);
      if (error) console.error(error);
      if (data) {
        setFavs(data[0].favs);
      }
    };
    getUserFavs();
  }, [user]);

  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center h-full gap-4">
        <h1 className="md:text-4xl text-2xl font-semibold">
          You need to be logged in to view this page.
        </h1>
        <Button onClick={() => router.push("/login")}>Login</Button>
      </main>
    );
  }

  if (user) {
    return (
      <main className="md:space-y-16 space-y-8 p-2">
        <RouteHeading
          sort={sort}
          setSort={setSort}
          h1="Profile"
          h2={"Welcome back " + user.user_metadata?.name}
          extraHeadings={
            <p className="font-medium text-muted-foreground px-0.5">
              View your saved resources below.
            </p>
          }
        />

        <section className=" grid lg:grid-cols-2 place-items-center gap-4 p-4">
          {resources
            .filter((res) => favs.includes(res.name))
            .sort((a, b) => {
              if (sort === "A-Z") {
                return a.name.localeCompare(b.name);
              } else {
                return b.name.localeCompare(a.name);
              }
            })
            .map((res) => (
              <div key={res.name}>
                <ResourceCard
                  user={user}
                  biggerText
                  className="border even:bg-card odd:bg-card sm:hidden aspect-[4/3]"
                  imgRes="16/9"
                  favs={favs}
                  setFavs={setFavs}
                  resource={res}
                />
                <ResourceCard
                  user={user}
                  biggerText
                  favs={favs}
                  setFavs={setFavs}
                  className="border lg:hover:scale-[1.005] lg:hover:shadow-md transition-all even:bg-card odd:bg-card hidden sm:block aspect-[4/3]"
                  resource={res}
                  imgRes="4/3"
                />
              </div>
            ))}
        </section>
      </main>
    );
  }
};

export default Profile;
