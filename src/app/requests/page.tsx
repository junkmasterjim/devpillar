"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
	const [loading, setLoading] = useState(false);
	const [requests, setRequests] = useState<ResourceRequest[]>([]);

	const getData = async () => {
		setLoading(true);

		const supabase = createClient();
		const { data: resourceRequests } = await supabase
			.from("resourceRequests")
			.select();

		resourceRequests && setRequests(resourceRequests);

		setLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="flex flex-wrap gap-2 justify-center">
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
		</div>
	);
}
