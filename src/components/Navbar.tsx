"use client";

import Image from "next/image";
import Link from "next/link";
import { Burger } from "./Navigation";
import { Button } from "./ui/button";
import { Github, LogIn } from "lucide-react";

const Navbar = () => {
	return (
		<nav className="flex p-3 fixed z-50 bg-gradient-to-b from-background via-background/50 to-background/0 w-full justify-center backdrop-blur-lg backdrop-brightness-90 items-center ">
			<div className="flex max-w-screen-2xl justify-between items-center w-full px-2">
				<div className="select-none">
					<Link
						href={"/"}
						className="text-2xl tracking-tight font-medium flex gap-2"
					>
						<Image
							alt="DevPillar Logo"
							width={32}
							height={32}
							src={"/logo.png"}
						/>
						<p>
							<span className="text-muted-foreground">Dev</span>Pillar
						</p>
					</Link>
				</div>

				<div className="lg:flex flex-row-reverse hidden items-center gap-4 pr-2">
					<Button
						onClick={() => document.getElementById("githubLink")?.click()}
						variant={"secondary"}
						className="text-muted-foreground"
						size={"sm"}
					>
						<Link
							id="githubLink"
							className="flex items-center gap-1"
							target="_blank"
							href={"https://github.com/noahpittman/devpillar"}
						>
							<Github className=" h-5 w-5 mr-2" />
							Github
						</Link>
					</Button>
					<Button
						onClick={() => document.getElementById("signInLink")?.click()}
						disabled
						variant={"outline"}
						className="text-muted-foreground"
						size={"sm"}
					>
						<Link
							id="signInLink"
							className="flex items-center gap-1"
							target="_blank"
							href={"https://github.com/noahpittman/devpillar"}
						>
							<LogIn className=" h-5 w-5 mr-2" />
							Sign In
						</Link>
					</Button>
				</div>

				<div className="lg:hidden flex items-center gap-4">
					<Burger />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
