"use client";

import { ResourceCard } from "@/components/resource-card";
import { SortSelect } from "@/components/sort-select";
import { Button } from "@/components/ui/button";
import { Category, Resource, categories, resources } from "@/lib/resources";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const supabase = createClient();

const Page = ({ params }: { params: any }) => {
  const [user, setUser] = useState<User>();
  const [sort, setSort] = useState<"A-Z" | "Z-A">("A-Z");

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      return;
    } else {
      setUser(data.user);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
      // if not in the category registry, redirect to home. This is to prevent arbitrary redirects and avoid 404 errors.
      redirect("/");
    }

    // we are now in subcategory territory
    const parentCategory = categories.find((cat) =>
      cat.subcategories.includes(category),
    );

    const results = resources
      .sort((a: Resource, b: Resource) => {
        return a.name.localeCompare(b.name);
      })
      .filter((resource) => resource.subcategory.includes(category));

    // subcategory render
    return (
      <Results
        setSort={setSort}
        sort={sort}
        user={user}
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
      setSort={setSort}
      sort={sort}
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
  setSort,
  user,
}: {
  cat: Category;
  results: Array<Resource>;
  sort: "A-Z" | "Z-A";
  setSort: (sort: "A-Z" | "Z-A") => void;
  user?: User;
}) => {
  return (
    <>
      <div className="min-h-svh">
        <div className="flex px-4 py-8 justify-center flex-col select-none border-b-2">
          <span>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-foreground capitalize tracking-tighter">
              {cat.name ?? cat}
            </h1>
            <div className="flex place-items-start justify-between">
              <h2 className="xl:text-4xl sm:text-2xl text-xl font-medium capitalize text-foreground/80 tracking-tighter">
                {results.length} resources.
              </h2>

              <div className="flex gap-2 flex-col place-items-center">
                <Button
                  variant={"ghost"}
                  className="text-muted-foreground"
                  asChild
                >
                  <Link
                    href={"https://github.com/noahpittman/devpillar/"}
                    target="_blank"
                  >
                    <PlusCircle className="mr-2 size-4" />
                    Add a resource
                  </Link>
                </Button>

                <SortSelect setSort={setSort} sort={sort} />
              </div>
            </div>
          </span>
        </div>
        <div className=" grid lg:grid-cols-2 place-items-center gap-4 p-4">
          {results
            .sort((a, b) => {
              if (sort === "A-Z") {
                return a.name.localeCompare(b.name);
              } else {
                return b.name.localeCompare(a.name);
              }
            })
            .map((res) => (
              <>
                <ResourceCard
                  user={user}
                  biggerText
                  className="border even:bg-card odd:bg-card sm:hidden aspect-[4/3]"
                  imgRes="16/9"
                  resource={res}
                  key={res.name}
                />
                <ResourceCard
                  user={user}
                  biggerText
                  className="border lg:hover:scale-[1.005] lg:hover:shadow-md transition-all even:bg-card odd:bg-card hidden sm:block aspect-[4/3]"
                  resource={res}
                  imgRes="4/3"
                  key={res.name}
                />
              </>
            ))}
        </div>
      </div>
    </>
  );
};
