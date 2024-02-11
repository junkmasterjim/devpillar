"use client";

import { Hero } from "@/components/Hero";
import { Resource, resources } from "../../../resources";
import ResourceCard from "@/components/ResourceCard";

import { motion } from "framer-motion";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";

const supabase = createClient();

const Home = () => {
	const params = useSearchParams();

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
				.insert([{ email: session.user.email, favs: null }]);
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
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				className="gap-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto"
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
