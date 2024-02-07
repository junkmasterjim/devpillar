"use client";

import { LucideIcon, Menu, Search } from "lucide-react";
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

export const Sidebar = () => {
	return (
		<div className="lg:flex flex-col hidden max-w-sm w-full pt-24">
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

			<div className="flex flex-col w-3/4 overflow-auto max-w-sm max-h-[calc(100svh-99px)] group">
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
			<SheetContent className="flex pt-5 flex-col overflow-scroll">
				<SheetTitle className="line-through text-muted-foreground">
					Search
				</SheetTitle>
				<div className="w-5/6">
					<div className="mb-8 w-full text-foreground h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 grid grid-flow-col bg-background ">
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
