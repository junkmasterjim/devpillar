"use client";

import { Category, Resource, resources } from "../../../resources";
import ResourceCard from "@/components/ResourceCard";

import { useState } from "react";
import { motion } from "framer-motion";

import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { createClient } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import { SortingSelect } from "@/components/SortingSelect";
import { FilterSelect } from "@/components/FilterSelect";

const supabase = createClient();

const Home = () => {
	const [sort, setSort] = useState<"A-Z" | "Z-A">("A-Z");
	const [filter, setFilter] = useState<Category["name"] | "none">("none");

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

	return (
		<>
			<Hero />

			<ScrollToTop />

			<motion.section
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
			>
				<div className="py-4">
					<h2 className="md:text-3xl text-xl font-semibold text-muted-foreground py-2 select-none">
						All Resources{" "}
						<span className="text-muted-foreground/50 text-lg">
							({resources.length})
						</span>
					</h2>

					<div className="flex flex-col sm:flex-row gap-2">
						<SortingSelect sort={sort} setSort={setSort} />
						<FilterSelect filter={filter} setFilter={setFilter} />
					</div>
				</div>

				<div className="gap-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto">
					{sort === "A-Z"
						? resources
								.sort((a: Resource, b: Resource) => {
									return a.name.localeCompare(b.name);
								})
								.filter((resource: Resource) => {
									if (filter === "none") return resource;

									// @ts-ignore
									return resource.category.includes(filter);
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
								))
						: resources
								.sort((a: Resource, b: Resource) => {
									return b.name.localeCompare(a.name);
								})
								.filter((resource: Resource) => {
									if (filter === "none") return resource;

									// @ts-ignore
									return resource.category.includes(filter);
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
				</div>
			</motion.section>
		</>
	);
};

export default Home;
