"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";
import { UserMetadata } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Category, Resource, resources } from "../../../resources";
import ResourceCard from "@/components/ResourceCard";

import { SortingSelect } from "@/components/SortingSelect";
import { FilterSelect } from "@/components/FilterSelect";

const supabase = createClient();

const Profile = () => {
	const router = useRouter();

	const [loading, setLoading] = useState<boolean>(true);
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [email, setEmail] = useState<string | null>(null);
	const [favs, setFavs] = useState<string[]>([]);

	const [sort, setSort] = useState<"A-Z" | "Z-A">("A-Z");
	const [filter, setFilter] = useState<Category["name"] | "none">("none");

	const [user, setUser] = useState<
		| {
				avatar_url: string;
				email: string;
				email_verified: boolean;
				full_name: string;
				iss: string;
				name: string;
				phone_verified: boolean;
				preferred_username: string;
				provider_id: string;
				sub: string;
				user_name: string;
		  }
		| UserMetadata
	>();

	const getUser = async () => {
		const { data, error } = await supabase.auth.getUser();

		if (error) {
			router.push("/login");
		} else if (!data.user?.user_metadata) {
			router.push("/login");
		} else if (data.user?.user_metadata) {
			setAuthenticated(true);
			setLoading(false);
			setUser(data.user?.user_metadata);
			setEmail(data.user?.user_metadata.email);
		}
	};

	const getFavs = async () => {
		const { data, error } = await supabase
			.from("userFavs")
			.select("*")
			.eq("email", email)
			.select();

		if (error) console.error(error);
		if (data) {
			if (data[0]?.favs) {
				setFavs(data[0].favs);
			}
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	useEffect(() => {
		if (email) {
			getFavs();
		}
	}, [email]);

	if (loading) {
		return (
			<div className="flex justify-center h-3/5 items-center w-full ">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-t-2 border-primary" />
			</div>
		);
	}

	if (!authenticated || (!user && !loading)) {
		router.push("/login");
	}

	if (authenticated && user && !loading) {
		return (
			<main className="md:space-y-16 space-y-8 p-2">
				<div className="flex flex-wrap items-center justify-between gap-2">
					<h1 className="md:text-4xl text-2xl font-semibold">
						Welcome to DevPillar, {user?.name.split(" ")[0] || user?.name}! 🎉
					</h1>
					<div className="flex gap-2 md:flex-row flex-row-reverse items-center line-through">
						<Button variant={"ghost"} disabled>
							Edit Profile
						</Button>
						<Avatar>
							<AvatarImage src={user?.avatar_url} alt={user?.name} />
							<AvatarFallback>{user?.name[0]}</AvatarFallback>
						</Avatar>
					</div>
				</div>

				<Separator />

				<div className="space-y-4">
					<div className="flex flex-col gap-2">
						<h2 className="md:text-3xl text-xl font-semibold text-muted-foreground">
							Your Favorites
						</h2>
						<div className="flex gap-2">
							<SortingSelect sort={sort} setSort={setSort} />
							<FilterSelect filter={filter} setFilter={setFilter} />
						</div>
					</div>
					<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
						{sort === "A-Z" &&
							resources
								.filter((res) => favs.includes(res.name))
								.filter((resource: Resource) => {
									if (filter === "none") return resource;

									// @ts-ignore
									return resource.category.includes(filter);
								})
								.sort((a, b) => a.name.localeCompare(b.name))
								.map((res) => (
									<ResourceCard
										className="mx-auto w-full"
										key={res.name}
										name={res.name}
										description={res.description}
										category={res.category}
										url={res.url}
										paid={res.paid}
										image={res.image}
									/>
								))}
						{sort === "Z-A" &&
							resources
								.filter((res) => favs.includes(res.name))
								.filter((resource: Resource) => {
									if (filter === "none") return resource;

									// @ts-ignore
									return resource.category.includes(filter);
								})
								.sort((a, b) => a.name.localeCompare(b.name))
								.reverse()
								.map((res) => (
									<ResourceCard
										className="mx-auto w-full"
										key={res.name}
										name={res.name}
										description={res.description}
										category={res.category}
										url={res.url}
										paid={res.paid}
										image={res.image}
									/>
								))}
					</div>
				</div>
			</main>
		);
	}
};

export default Profile;
