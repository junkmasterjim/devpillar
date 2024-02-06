"use client";

import { Resource, categories, resources } from "../../../resources";
import { redirect } from "next/navigation";
import ResourceCard from "@/components/ResourceCard";
import { motion } from "framer-motion";

const Page = ({ params }: { params: any }) => {
	if (!params.category[0]) {
		redirect("/");
	}

	const category = params.category[0];

	return (
		<>
			<motion.section
				initial={{ opacity: 0, y: 20 }}
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
