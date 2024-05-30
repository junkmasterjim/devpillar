"use client";

import ResourceCard from "@/components/ResourceCard";
import { Category, Resource, categories, resources } from "@/lib/resources";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { FilterSelect } from "@/components/FilterSelect";
import { Hero } from "@/components/Hero";
import { SortingSelect } from "@/components/SortingSelect";
import { createClient } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";

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
    <main>
      <Hero />
      <section className="min-h-96 pb-12">
        <div className="flex h-16 border-b border-t items-center tracking-tighter text-3xl px-2 justify-between">
          <span>Featured Resources</span>
          <span className="text-muted-foreground font-light">
            Good for all occasions
          </span>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.name} className="min-h-96 pb-12">
          <div className="flex h-16 border-b border-t items-center tracking-tighter text-3xl px-2 justify-between">
            <p>{cat.name}</p>
            <p className=" text-muted-foreground font-light">
              {
                resources
                  .sort((a: Resource, b: Resource) => {
                    return a.name.localeCompare(b.name);
                  })
                  .filter((resource) =>
                    resource.category.includes(cat.name as any),
                  ).length
              }
            </p>
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

    //     <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto">
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
