"use client";

import { ResourceCard } from "@/components/resource-card";
import RouteHeading from "@/components/route-heading";
import { Button } from "@/components/ui/button";
import { Resource, resources } from "@/lib/resources";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const supabase = createClient();

const Page = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get("q");
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [favs, setFavs] = useState<string[]>([]);

  const [sort, setSort] = useState<"A-Z" | "Z-A">("A-Z");

  const searchResults = params
    ? resources.filter((resource: Resource) => {
        const categories = resource.category.map((category) =>
          category.toLowerCase(),
        );

        const keywords = resource.keywords?.map((key) => {
          return key.toLowerCase();
        });

        return (
          resource.name.toLowerCase().includes(params.toLowerCase()) ||
          categories.some((category) =>
            category.includes(params.toLowerCase()),
          ) ||
          keywords?.some((keyword) => keyword.includes(params.toLowerCase()))
        );
      })
    : [];

  useEffect(() => {
    !params ? router.push("/") : console.log("params: ", params);

    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) setUser(data.user);
    };
    getUser();
  });

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

  return (
    <>
      {params && (
        <div className="min-h-svh">
          <RouteHeading
            h1="Search"
            h2={`${searchResults.length} results for "${params}"`}
            sort={sort}
            setSort={setSort}
            noSort={searchResults.length === 0 ? true : false}
          />

          {searchResults.length === 0 && (
            <div className="flex flex-col gap-2 justify-center h-96 mt-16 items-center text-muted-foreground tracking-tight">
              <p>Sorry! We don&apos;t have anything for that yet!</p>
              <Button asChild>
                <Link
                  href={"https://github.com/noahpittman/devpillar"}
                  target="_blank"
                >
                  <PlusCircle className="size-5 mr-2" />
                  Add a resource?
                </Link>
              </Button>
            </div>
          )}

          <section className="grid lg:grid-cols-2 place-items-center gap-4 p-4">
            {searchResults
              .sort((a, b) => {
                if (sort === "A-Z") {
                  return a.name.localeCompare(b.name);
                } else {
                  return b.name.localeCompare(a.name);
                }
              })
              .map((res) => (
                <span key={res.name}>
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
                </span>
              ))}
          </section>
        </div>
      )}
    </>
  );
};

export default Page;
