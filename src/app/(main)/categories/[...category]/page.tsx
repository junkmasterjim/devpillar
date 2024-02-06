"use client";

import { Resource, categories, resources } from "../../../../../resources";
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

	const category = params.category[0];

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				className="flex py-20 text-center justify-center items-center flex-col"
			>
				<div className="flex justify-center items-center flex-col">
					<h1 className="text-4xl leading-10 pb-4 pt-6 font-medium text-foreground">
						{category}
					</h1>
					<Button
						variant={"ghost"}
						className="mt-4 text-muted-foreground"
						asChild
					>
						<Link href="/">
							<Reply className="mr-2" />
							All Categories
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
				{resources
					.sort((a: Resource, b: Resource) => {
						return a.name.localeCompare(b.name);
					})
					.filter((resource) => resource.category.includes(category))
					.map((resource) => (
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
		</>
	);
};

export default Page;
