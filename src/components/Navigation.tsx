"use client";

import { Inbox, LogIn, LucideIcon, Menu, Search, User } from "lucide-react";
import { categories } from "../../resources";
import { Button } from "./ui/button";

import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { InputUnstyled } from "./ui/input-unstyled";
import { ResponsiveDialog } from "./ResponsiveDialog";
import { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const supabase = createClient();

export const Sidebar = () => {
	return (
		<div className="lg:flex flex-col hidden max-w-sm w-full pt-24 ">
			<div className="mb-8 w-3/5 text-foreground h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 grid grid-flow-col bg-background ">
				<Search
					onClick={() => document?.getElementById("search")?.focus()}
					className="h-5 w-5 mr-2"
				/>
				<InputUnstyled
					id="search"
					disabled
					className="line-through border-0 bg-background "
					placeholder={`Search for a resource`}
				/>
			</div>

			<div className="flex flex-col w-3/4 overflow-auto max-w-sm max-h-[calc(100svh-99px)] group select-none">
				<p className=" px-1 tracking-wide font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
					Categories
				</p>
				{categories.map((cat: { name: string; icon: LucideIcon }) => (
					<Button
						key={cat.name}
						asChild
						variant={"link"}
						className="my-1 px-2 text-left block text-muted-foreground hover:text-foreground transition-all w-3/4"
					>
						<Link href={`/categories/${cat.name}`}>
							<cat.icon className="h-4 w-4 mr-2 inline" />
							{cat.name}
						</Link>
					</Button>
				))}
			</div>
		</div>
	);
};

export const Burger = () => {
	const router = useRouter();

	const [loading, setLoading] = useState<boolean>(true);
	const [isAuth, setIsAuth] = useState<boolean>();

	const getSession = async () => {
		const { data, error } = await supabase.auth.getSession();

		if (error) {
			console.error(error);
			setIsAuth(false);
			setLoading(false);
		} else if (data) {
			if (data.session?.user) {
				// console.log(data);
				setIsAuth(true);
				setLoading(false);
			} else {
				// console.log(data);
				setIsAuth(false);
				setLoading(false);
			}
		}
	};

	useEffect(() => {
		getSession();
	}, [isAuth]);

	return (
		<Sheet>
			<SheetTrigger id="burgerMenu" />
			<Button
				onClick={() => document.getElementById("burgerMenu")?.click()}
				size={"icon"}
				className="p-0 w-8 h-8 bg-background/50 border border-border/75"
			>
				<Menu className="h-5 w-5" />
			</Button>
			<SheetContent className="flex pt-16 flex-col overflow-scroll select-none">
				<ResponsiveDialog />

				<>
					{loading && (
						<>
							<Button
								disabled
								variant={"outline"}
								className="text-muted-foreground"
							>
								<div className="animate-spin rounded-full h-5 w-5 mr-2 border-b-2 border-t-2 border-primary" />
								Loading...
							</Button>
						</>
					)}

					{!loading && isAuth === true && (
						<>
							<Button
								asChild
								variant={"outline"}
								className="text-muted-foreground"
							>
								<Link href={"/profile"}>
									<User className="h-5 w-5 mr-2" />
									Profile
								</Link>
							</Button>
							<Button
								variant={"outline"}
								className="text-muted-foreground"
								onClick={async () => {
									let { error } = await supabase.auth.signOut();

									if (error) {
										console.error(error);
										toast.error("Error signing out");
									} else setIsAuth(false);
								}}
							>
								<LogIn className="h-5 w-5 mr-2" />
								Sign Out
							</Button>
						</>
					)}

					{!loading && isAuth === false && (
						<Button
							variant={"outline"}
							disabled={isAuth === null}
							className="text-muted-foreground"
						>
							<Link
								id="signInLink"
								className="flex items-center gap-2"
								href={"/login"}
							>
								<LogIn className="h-5 w-5 rotate-180" />
								Sign In
							</Link>
						</Button>
					)}
				</>

				<div className="">
					<div className="mb-8 w-full text-foreground h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 grid grid-flow-col bg-background ">
						<Search
							onClick={() => document?.getElementById("search")?.focus()}
							className="h-5 w-5"
						/>
						<InputUnstyled
							id="search"
							disabled
							className="line-through border-0 bg-background "
							placeholder={`Search for a resource`}
						/>
					</div>
				</div>
				<SheetTitle>Categories</SheetTitle>
				{categories.map((cat: { name: string; icon: LucideIcon }) => (
					<Button
						key={cat.name}
						onClick={() => document.getElementById("burgerMenu")?.click()}
						asChild
						variant={"link"}
						className="my-1 px-2 text-left block text-muted-foreground hover:text-foreground transition-all w-3/4"
					>
						<Link href={`/categories/${cat.name}`}>
							<cat.icon className="h-4 w-4 mr-2 inline" />
							{cat.name}
						</Link>
					</Button>
				))}

				<div className="flex flex-col w-3/4 overflow-auto max-w-sm max-h-[calc(100svh-99px)] group">
					<p className=" px-1 tracking-wide font-medium underline text-muted-foreground group-hover:text-foreground transition-colors">
						Categories
					</p>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export const Navbar = () => {
	const router = useRouter();

	const [loading, setLoading] = useState<boolean>(true);
	const [isAuth, setIsAuth] = useState<boolean>();

	const getSession = async () => {
		const { data, error } = await supabase.auth.getSession();

		if (error) {
			console.error(error);
			setIsAuth(false);
			setLoading(false);
		} else if (data) {
			if (data.session?.user) {
				// console.log(data);
				setIsAuth(true);
				setLoading(false);
			} else {
				// console.log(data);
				setIsAuth(false);
				setLoading(false);
			}
		}
	};

	useEffect(() => {
		getSession();
	}, [isAuth]);

	return (
		<nav className="flex p-3 fixed z-50 bg-gradient-to-b from-background via-background/50 to-background/0 w-full justify-center backdrop-blur-lg backdrop-brightness-90 items-center select-none">
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
					<ResponsiveDialog />

					<>
						{loading && (
							<>
								<Button
									disabled
									variant={"outline"}
									className="text-muted-foreground"
								>
									<div className="animate-spin rounded-full h-5 w-5 mr-2 border-b-2 border-t-2 border-primary" />
									Loading...
								</Button>
							</>
						)}

						{!loading && isAuth === true && (
							<>
								<Button
									variant={"outline"}
									className="text-muted-foreground"
									size={"sm"}
									onClick={async () => {
										let { error } = await supabase.auth.signOut();

										if (error) {
											console.error(error);
											toast.error("Error signing out");
										} else setIsAuth(false);
									}}
								>
									<LogIn className="h-5 w-5 mr-2" />
									Sign Out
								</Button>
								<Button
									asChild
									variant={"outline"}
									className="text-muted-foreground"
									size={"sm"}
								>
									<Link href={"/profile"}>
										<User className="h-5 w-5 mr-2" />
										Profile
									</Link>
								</Button>
							</>
						)}

						{!loading && isAuth === false && (
							<Button
								variant={"outline"}
								disabled={isAuth === null}
								className="text-muted-foreground"
								size={"sm"}
							>
								<Link
									id="signInLink"
									className="flex items-center gap-2"
									href={"/login"}
								>
									<LogIn className="h-5 w-5 rotate-180" />
									Sign In
								</Link>
							</Button>
						)}
					</>

					<Button
						variant={"outline"}
						asChild
						className="text-muted-foreground"
						size={"sm"}
					>
						<Link
							id="newsletterLink"
							className="flex items-center gap-2 scroll-smooth"
							scroll
							href={"#newsletter"}
						>
							<Inbox className=" h-5 w-5" />
							Newsletter
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
