"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface ResourceRequest {
	id: number;
	name: string;
	description: string;
	url: string;
	categories: string[];
}

export default function Requests() {
	const [loading, setLoading] = useState<boolean>(true);
	const [requests, setRequests] = useState<ResourceRequest[]>();

	const getData = async () => {
		const supabase = createClient();
		const { data: resourceRequests } = await supabase
			.from("resourceRequests")
			.select();

		resourceRequests && setRequests(resourceRequests);

		setTimeout(() => setLoading(false), 500);
	};

	getData();

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-t-2 border-primary" />
			</div>
		);
	}

	if (!requests) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-center text-muted-foreground">
					Error fetching resource requests.
				</p>
			</div>
		);
	}

	if (requests && requests.length === 0) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-center text-muted-foreground">
					No resource requests found.
				</p>
			</div>
		);
	}

	if (requests && requests.length > 0) {
		return (
			<div className="flex flex-wrap gap-2 justify-center">
				{requests && requests?.length === 0 && (
					<p className="text-center text-muted-foreground">
						No resource requests found.
					</p>
				)}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="grid grid-cols-3 gap-4"
				>
					{requests?.map((request: ResourceRequest) => (
						<Card
							key={request.id}
							className="max-w-sm w-full flex justify-between flex-col"
						>
							<CardHeader>
								<CardTitle>
									<span className="text-muted-foreground">{request.id}. </span>
									{request.name}
								</CardTitle>
								<CardDescription>{request.description}</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<Button asChild size={"sm"} variant={"outline"}>
									<Link href={request.url} target="_blank">
										<ArrowUpRightFromSquare className="h-5 w-5 mr-2" /> Visit
										Resource
									</Link>
								</Button>
								<p>
									{request.categories.map((cat) => (
										<Badge key={Math.random()} variant={"secondary"}>
											{cat}
										</Badge>
									))}
								</p>
							</CardContent>
						</Card>
					))}
				</motion.div>
			</div>
		);
	}
}
