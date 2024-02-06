"use client";

import { Hero } from "@/components/Hero";
import { Resource, resources, categories } from "../../../resources";
import ResourceCard from "@/components/ResourceCard";

import { motion } from "framer-motion";

const Home = () => {
	return (
		<>
			<Hero />

			<motion.section
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				className="gap-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"
			>
				{resources
					.sort((a: Resource, b: Resource) => {
						return a.name.localeCompare(b.name);
					})
					.map((resource: Resource) => (
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

export default Home;
