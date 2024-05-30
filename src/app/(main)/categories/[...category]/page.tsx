"use client";

import { Category, Resource, categories, resources } from "@/lib/resources";
import { redirect } from "next/navigation";
import ResourceCard from "@/components/ResourceCard";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Reply } from "lucide-react";
import Link from "next/link";

const Page = ({ params }: { params: any }) => {
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
    return <Results results={results} cat={category} />;
  }

  const results = resources
    .sort((a: Resource, b: Resource) => {
      return a.name.localeCompare(b.name);
    })
    .filter((resource) => resource.category.includes(category));

  // main categories render
  return <Results results={results} cat={category} />;
};

export default Page;

const Results = ({
  cat,
  results,
}: {
  cat: Category;
  results: Array<Resource>;
}) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex py-20 text-center justify-center items-center flex-col"
      >
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl leading-10 pb-4 pt-6 font-medium text-foreground">
            {cat.name ?? cat}{" "}
            <span className="text-muted-foreground/50 text-xl">
              ({results.length})
            </span>
          </h1>
          <Button
            variant={"ghost"}
            className="mt-4 text-muted-foreground"
            asChild
          >
            <Link href="/">
              <Reply className="mr-2" />
              Home
            </Link>
          </Button>
        </div>
      </motion.div>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"
      >
        {results.map((resource) => (
          <ResourceCard
            key={Math.random()}
            name={resource.name}
            category={resource.category}
            description={resource.description}
            paid={resource.paid}
            url={resource.url}
            image={resource?.image}
          />
        ))}
      </motion.section>
    </div>
  );
};
