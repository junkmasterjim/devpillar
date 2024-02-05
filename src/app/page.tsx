"use client";

import { Resource, resources } from "../../resources";
import Navbar from "@/components/Navbar";
import ResourceCard from "@/components/ResourceCard";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";

const Home = () => {
	return (
		<>
			<Navbar />
			<motion.main
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				className="flex px-2 max-w-screen-2xl mx-auto gap-4 justify-between overflow-auto max-h-screen"
			>
				<div className="lg:flex flex-col hidden max-w-sm w-full pt-24">
					<div className="py-4 w-3/4">
						<Input placeholder={"Search"} />
					</div>
					<div className="flex flex-col w-3/4 overflow-auto max-w-sm max-h-[calc(100svh-99px)]">
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
						<p>Sidebar Categories</p>
					</div>
				</div>

				{/* Cards */}

				<section className="max-w-screen-xl pt-24 pr-4 overflow-auto gap-4 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto">
					{resources.map((resource: Resource) => (
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
				</section>
			</motion.main>
		</>
	);
};

export default Home;
