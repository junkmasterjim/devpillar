"use client";

import ResourceCard from "@/components/ResourceCard";
import { Category, Resource, categories, resources } from "@/lib/resources";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// import { FilterSelect } from "@/components/FilterSelect";
// import { SortingSelect } from "@/components/SortingSelect";
import { Hero } from "@/components/hero";
import { createClient } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const supabase = createClient();

const Home = () => {
  const [sort, setSort] = useState<"A-Z" | "Z-A">("A-Z");
  const [filter, setFilter] = useState<Category["name"] | "none">("none");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      const user = await supabase.auth.getUser();
      if (user.data.user) {
        setIsLoggedIn(true);
      }
    };

    getUser();
  }, []);

  return (
    <main className="pb-12">
      <Hero />

      <section className="min-h-96">
        <div className="flex h-16 border-b border-t items-center tracking-tighter text-3xl px-2 justify-between">
          <span>Featured Resources</span>
          <span className="text-muted-foreground font-light">
            Good for all occasions
          </span>
        </div>
        <div className="w-full h-80 flex place-items-center justify-center text-muted-foreground">
          Nothing yet...
        </div>
      </section>

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
                <Link
                  href={res.url + "/?ref=devpillar"}
                  target="_blank"
                  key={res.name}
                  className={cn(
                    "h-56 lg:h-80 aspect-[4/3] hover:bg-popover transition-colors relative",
                    idx % 2 == 0 ? "odd:bg-muted" : "even:bg-muted",
                  )}
                >
                  <div className="grid grid-cols-[2fr,_1fr]">
                    <div className="h-full grid grid-rows-[1fr,_auto,_0.5fr] divide-y-2">
                      <div className="p-2">
                        <p className="text-lg font-medium tracking-tighter">
                          {res.name}
                        </p>
                        <p className="text-xs line-clamp-3 text-muted-foreground leading-3 tracking-tight">
                          {res.description}
                        </p>
                      </div>

                      <Image
                        src={res.image}
                        alt={res.name}
                        unoptimized
                        height={90 * 2}
                        width={160 * 2}
                        className="object-cover aspect-video w-full group-hover:opacity-75 transition-opacity"
                      />
                      <div className="flex justify-between h-full  text-xs tracking-tight p-1 overflow-hidden">
                        <p className="h-9">favourites go here</p>
                        <p>share goes here</p>
                      </div>
                    </div>

                    <div className="grid grid-rows-[1fr,_auto] h-56 lg:h-80 w-full text-sm divide-y-2 border-l-2">
                      <div className="flex flex-col h-full gap-2 text-sm tracking-tight p-1 overflow-hidden">
                        <div>
                          <p className="font-semibold tracking-tighter">
                            Categories:
                          </p>
                          {res.category.map((c) => (
                            <p className="truncate" key={c}>
                              # {c}
                            </p>
                          ))}
                        </div>

                        <div className="text-xs">
                          <p className="font-semibold tracking-tighter">
                            Subcategories:
                          </p>
                          {res.subcategory.map((c) => (
                            <p className="truncate" key={c}>
                              ## {c}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex w-full justify-center items-center py-1 text-sm font-medium tracking-tight text-muted-foreground">
                        {res.paid}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </main>

    // <>
    //   <motion.section
    //     initial={{ opacity: 0, y: 0 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.3 }}
    //   >
    //     <div className="py-4">
    //       <h2 className="md:text-3xl text-xl font-semibold text-muted-foreground py-2 select-none">
    //         All Resources{" "}
    //         <span className="text-muted-foreground/50 text-lg">
    //           ({resources.length})
    //         </span>
    //       </h2>

    //       <div className="flex flex-col sm:flex-row gap-2">
    //         <SortingSelect sort={sort} setSort={setSort} />
    //         <FilterSelect filter={filter} setFilter={setFilter} />
    //       </div>
    //     </div>

    //     <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto">
    //       {sort === "A-Z"
    //         ? resources
    //             .sort((a: Resource, b: Resource) => {
    //               return a.name.localeCompare(b.name);
    //             })
    //             .filter((resource: Resource) => {
    //               if (filter === "none") return resource;

    //               // @ts-ignore
    //               return resource.category.includes(filter);
    //             })
    //             .map((resource: Resource) => (
    //               <ResourceCard
    //                 key={Math.random()}
    //                 name={resource.name}
    //                 category={resource.category}
    //                 description={resource.description}
    //                 paid={resource.paid}
    //                 url={resource.url}
    //                 image={resource?.image}
    //               />
    //             ))
    //         : resources
    //             .sort((a: Resource, b: Resource) => {
    //               return b.name.localeCompare(a.name);
    //             })
    //             .filter((resource: Resource) => {
    //               if (filter === "none") return resource;

    //               // @ts-ignore
    //               return resource.category.includes(filter);
    //             })
    //             .map((resource: Resource) => (
    //               <ResourceCard
    //                 key={Math.random()}
    //                 name={resource.name}
    //                 category={resource.category}
    //                 description={resource.description}
    //                 paid={resource.paid}
    //                 url={resource.url}
    //                 image={resource?.image}
    //               />
    //             ))}
    //     </div>
    //   </motion.section>
    // </>
  );
};

export default Home;
