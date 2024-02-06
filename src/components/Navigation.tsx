"use client";

import { LucideIcon, Menu } from "lucide-react";
import { categories } from "../../resources";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export const Sidebar = () => {
	return (
		<div className="lg:flex flex-col hidden max-w-sm w-full pt-24">
			<div className="py-4 w-3/5">
				<Input
					disabled
					className="line-through"
					placeholder={"Search for a resource"}
				/>
			</div>

			<div className="flex flex-col w-3/4 overflow-auto max-w-sm max-h-[calc(100svh-99px)] group">
				<p className=" px-1 tracking-wide font-medium underline text-muted-foreground group-hover:text-foreground transition-colors">
					Categories
				</p>
				{categories.map((cat: { name: string; icon: LucideIcon }) => (
					<Button
						key={cat.name}
						asChild
						variant={"link"}
						className="my-1 px-2 text-left block text-muted-foreground hover:text-foreground transition-all w-3/4"
					>
						<Link href={`/${cat.name}`}>
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
			<SheetTrigger id="burgerMenu"></SheetTrigger>
			<Button
				onClick={() => document.getElementById("burgerMenu")?.click()}
				size={"icon"}
				className="p-0 w-8 h-8 bg-background/50 border border-border/75"
			>
				<Menu className="h-5 w-5" />
			</Button>
			<SheetContent className="flex flex-col overflow-scroll">
				<div className="py-4 w-5/6">
					<SheetTitle>Search</SheetTitle>
					<Input
						disabled
						className="line-through"
						placeholder={"Search for a resource"}
					/>
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
						<Link href={`/${cat.name}`}>
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
