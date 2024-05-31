"use client";

import { ResourceCard } from "@/components/resource-card";
import RouteHeading from "@/components/route-heading";
import { Category, Resource, categories, resources } from "@/lib/resources";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const supabase = createClient();

const Page = ({ params }: { params: any }) => {
  const [user, setUser] = useState<User>();
  const [favs, setFavs] = useState<string[]>([]);
  const [favTimeout, setFavTimeout] = useState(true);
  const [sort, setSort] = useState<"A-Z" | "Z-A">("A-Z");

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
      setFavTimeout(false);
    };

    getUserFavs();
  }, [user]);

  if (!params.category[0]) {
    redirect("/");
  }
  let category = params.category[0];
  while (category.includes("%26")) {
    category = category.replace("%26", "&");
  }
  while (category.includes("%20")) {
    category = category.replace("%20", " ");
  }
  // If the category is not recognized, redirect to home
  const allowedCategories = categories.map((category) => category.name);
  const allowedSubcategories = categories
    .map((category) => category.subcategories)
    .flat()
    .map((sub) => sub);

  if (!allowedCategories.includes(category)) {
    if (!allowedSubcategories.includes(category)) {
      redirect("/");
    }

    const results = resources
      .sort((a: Resource, b: Resource) => {
        return a.name.localeCompare(b.name);
      })
      .filter((resource) => resource.subcategory.includes(category));

    // subcategory render
    return (
      <Results
        sort={sort}
        favs={favs}
        setFavs={setFavs}
        user={user}
        setSort={setSort}
        results={results}
        cat={category}
      />
    );
  }

  const results = resources
    .sort((a: Resource, b: Resource) => {
      return a.name.localeCompare(b.name);
    })
    .filter((resource) => resource.category.includes(category));

  // main categories render
  return (
    <Results
      sort={sort}
      favs={favs}
      setSort={setSort}
      setFavs={setFavs}
      user={user}
      results={results}
      cat={category}
    />
  );
};

export default Page;

const Results = ({
  cat,
  results,
  sort,
  user,
  favs,
  setFavs,
  setSort,
}: {
  cat: Category;
  results: Array<Resource>;
  sort: "A-Z" | "Z-A";
  user?: User;
  favs: string[];
  setFavs: Dispatch<SetStateAction<string[]>>;
  setSort: Dispatch<SetStateAction<"A-Z" | "Z-A">>;
}) => {
  return (
    <>
      <div className="min-h-svh">
        <RouteHeading
          setSort={setSort}
          sort="A-Z"
          h1={cat.name ?? cat}
          h2={results.length + " resources."}
          noSort
        />

        <section className=" grid lg:grid-cols-2 place-items-center gap-4 p-4">
          {results
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
      </div>
    </>
  );
};
