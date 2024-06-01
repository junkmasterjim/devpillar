"use client";

import { ExpandBadge } from "@/components/expand-badge";
import { ResourceCard } from "@/components/resource-card";
import { Resource, categories, resources } from "@/lib/resources";
import { createClient } from "@/lib/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient();

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  const [userFavourites, setUserFavourites] = useState<string[]>([]);
  const [favTimeout, setFavTimeout] = useState<boolean>(true);

  const createUserFavs = async (session: Session | null) => {
    if (session === null) return;

    const { data, error } = await supabase
      .from("userFavs")
      .select("*")
      .eq("email", session.user.email);
    if (error) console.error(error);

    if (data?.length === 0) {
      const { data, error } = await supabase
        .from("userFavs")
        .insert([{ email: session.user.email, favs: [] }]);
      if (error) console.error(error);
      else console.log(data);
    }
  };

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      createUserFavs(session);
    }
  });

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
        setUserFavourites(data[0].favs);
      }
      setFavTimeout(false);
    };

    getUserFavs();
  }, [user]);

  return (
    <main>
      <Hero />

      {/* <section className="min-h-96">
        <div className="flex h-16 border-b border-t items-center tracking-tighter lg:text-3xl text-xl px-2 justify-between bg-white dark:bg-black">
          <p className="truncate font-semibold">Featured</p>
          <p className="text-muted-foreground text-xl font-light text-end tracking-tight">
            Good for all occasions
          </p>
        </div>
        <div className="w-full h-80 flex place-items-center justify-center text-muted-foreground">
          Nothing yet...
        </div>
      </section> */}

      {categories.map((cat, idx) => (
        <section key={cat.name} className="lg:h-96 h-72">
          <div className="flex h-16 border-b border-t items-center tracking-tighter lg:text-3xl text-xl px-2 justify-between bg-white dark:bg-black">
            <p className="truncate font-semibold">{cat.name}</p>
            <p className="text-muted-foreground text-xl font-light mr-2 tracking-wide">
              [
              {
                resources
                  .sort((a: Resource, b: Resource) => {
                    return a.name.localeCompare(b.name);
                  })
                  .filter((resource) =>
                    resource.category.includes(cat.name as any),
                  ).length
              }
              ]
            </p>
          </div>

          <div className="flex overflow-hidden overflow-x-scroll divide-x-2">
            {resources
              .filter((res) => res.category.includes(cat.name as any))
              .map((res) => (
                <ResourceCard
                  user={user as User}
                  fixedHeight
                  resource={res}
                  key={res.name}
                  favs={userFavourites}
                  setFavs={setUserFavourites}
                  className="rounded-none"
                  mapIdx={idx}
                />
              ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;

const Hero = () => {
  return (
    <div>
      <div className="flex py-8 text-center justify-center items-center flex-col select-none">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-foreground capitalize tracking-tighter">
            Top notch developer tools
          </h1>
          <h2 className="xl:text-4xl sm:text-2xl text-xl font-medium capitalize text-foreground/80 tracking-tighter">
            Quality resources
          </h2>
        </div>
        <p className="text-muted-foreground max-w-prose mt-4 sm:text-base lg:text-lg tracking-tight">
          Welcome to DevPillar. <br />
          We think you&apos;ll like it here.
        </p>

        <div className="mt-4">
          <ExpandBadge />
        </div>

        <div className="max-w-sm w-full mx-auto overflow-hidden items-center justify-center mt-2 pb-12">
          <iframe
            scrolling="no"
            name="beehiiv-embed"
            src="https://embeds.beehiiv.com/083e2abd-d1cb-4d50-b5d5-3146de92c860?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            className="scale-[80%] overflow-hidden rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};
