"use client";

import * as React from "react";

import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { PlusCircle } from "lucide-react";
import { Separator } from "./ui/separator";
import { ResourceRequestForm } from "./ResourceRequestForm";

export function ResponsiveDialog() {
	const [open, setOpen] = React.useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	// Desktop
	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button
						id="add-resource"
						aria-hidden
						variant="white"
						size={"sm"}
						className="flex items-center gap-2 "
					>
						<PlusCircle /> Add resource
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px] ">
					<DialogHeader>
						<DialogTitle>Request a resource</DialogTitle>
						<DialogDescription>
							Request a resource to be added to the collection. We&apos;ll
							review it and add it if it meets our standards.
						</DialogDescription>
					</DialogHeader>

					<Separator />
					<ResourceRequestForm />
				</DialogContent>
			</Dialog>
		);
	}

	// Mobile
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button
					id="add-resource"
					variant="white"
					className="flex items-center gap-2"
				>
					<PlusCircle /> Add resource
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Request a resource</DrawerTitle>
					<DrawerDescription>
						Request a resource to be added to the collection. We&apos;ll review
						it and add it if it meets our standards.
					</DrawerDescription>
				</DrawerHeader>

				<Separator className="mb-1" />
				<ResourceRequestForm className="px-4" />

				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
