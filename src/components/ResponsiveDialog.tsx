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

import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

const supabase = createClient();

export function ResponsiveDialog() {
	const [loading, setLoading] = React.useState(true);
	const [isAuth, setIsAuth] = React.useState<boolean>();
	const [open, setOpen] = React.useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const getSession = async () => {
		const { data, error } = await supabase.auth.getSession();

		if (error) {
			console.error(error);
			setIsAuth(false);
			setLoading(false);
		} else if (data) {
			if (data.session?.user) {
				setIsAuth(true);
				setLoading(false);
			} else {
				console.log(data);
				setIsAuth(false);
				setLoading(false);
			}
		}
	};

	React.useEffect(() => {
		getSession();
	}, [isAuth]);

	// Desktop
	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				{isAuth && (
					<DialogTrigger asChild>
						<Button
							disabled={loading}
							id="add-resource"
							aria-hidden
							variant="white"
							size={"sm"}
							className="flex items-center gap-2 "
						>
							<PlusCircle /> Add resource
						</Button>
					</DialogTrigger>
				)}
				{!isAuth && (
					<Button
						disabled={loading}
						id="add-resource"
						aria-hidden
						variant="white"
						size={"sm"}
						className="flex items-center gap-2 "
						onClick={() =>
							toast.error("You need to be logged in to add a resource.")
						}
					>
						<PlusCircle /> Add resource
					</Button>
				)}
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
			{isAuth && (
				<DialogTrigger asChild>
					<Button
						disabled={loading}
						id="add-resource"
						aria-hidden
						variant="white"
						className="flex items-center gap-2 "
					>
						<PlusCircle /> Add resource
					</Button>
				</DialogTrigger>
			)}
			{!isAuth && (
				<Button
					disabled={loading}
					id="add-resource"
					aria-hidden
					variant="white"
					className="flex items-center gap-2 "
					onClick={() =>
						toast.error("You need to be logged in to add a resource.")
					}
				>
					<PlusCircle /> Add resource
				</Button>
			)}
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
