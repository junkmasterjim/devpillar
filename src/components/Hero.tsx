"use client";

import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 5 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className="flex py-20 text-center justify-center items-center flex-col select-none"
		>
			<div className="flex justify-center items-center flex-col">
				<Badge
					variant={"outline"}
					className="w-fit scale-[115%] mb-2 font-normal"
				>
					New Resources Added Bi-Weekly!
				</Badge>
				<h1 className="text-6xl pb-4 font-bold text-foreground">
					Welcome to DevPillar
				</h1>
			</div>
			<p className="text-muted-foreground max-w-prose">
				The foundation of your next project. An open source collection of
				quality resources for developers & designers.
			</p>
		</motion.div>
	);
};
