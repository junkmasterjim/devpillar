"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpRightFromSquare, Bookmark } from "lucide-react";
import Image from "next/image";
import { Resource } from "@/lib/resources";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const supabase = createClient();

const ResourceCard = ({
  name,
  description,
  category,
  url,
  paid,
  image,
  className,
}: {
  name: string;
  description: string;
  category: Resource["category"];
  url: string;
  paid: "Free" | "Paid" | "Free Plan";
  image: string;
  className?: string;
}) => {
  const [email, setEmail] = useState<string | null>(null);
  const [favs, setFavs] = useState<string[]>([]);
  const [favTimeout, setFavTimeout] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const getUserEmail = async () => {
    const { data } = await supabase.auth.getSession();

    if (data.session?.user?.email) {
      const userEmail = data.session?.user.email;
      setEmail(userEmail);
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
        setFavTimeout(false);
      }
    }
  };

  // function to toggle favs in supabase
  const toggleFav = async (favName: string) => {
    setFavTimeout(true);
    const { data, error } = await supabase
      .from("userFavs")
      .update({
        favs: favs.includes(favName)
          ? favs.filter((fav) => fav !== favName)
          : [...favs, favName],
      })
      .eq("email", email)
      .select();

    if (error) console.error(error);
    if (data) {
      if (data[0].favs) {
        setFavs(data[0].favs);
        setTimeout(() => setFavTimeout(false), 1000);
      }
      toast.success("Favourite updated!", { duration: 1500 });
    }
  };

  useEffect(() => {
    getUserEmail();
  }, []);

  useEffect(() => {
    setIsMounted(true);
    getFavs();
  }, [email]);

  return (
    <>
      <Card key={name} className={cn("max-w-md max-h-[30rem]", className)}>
        <CardHeader className="space-y-2 p-4 justify-between h-full">
          <div className="space-y-4">
            <CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between items-center">
              <Link
                href={url}
                target="_blank"
                className="flex items-center group"
              >
                {name}
                <ArrowUpRightFromSquare className="ml-2 inline h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
              <Button
                variant={"ghost"}
                size={"icon"}
                disabled={favTimeout}
                className={cn("text-muted-foreground", !email && "hidden")}
                onClick={() => {
                  toggleFav(name);
                }}
              >
                <Bookmark
                  className={cn(
                    "h-4 w-4",
                    favs.includes(name) && "text-yellow-500 fill-yellow-500",
                  )}
                />
              </Button>
            </CardTitle>

            <div>
              <Link href={url} target="_blank" className="">
                <div className="w-full relative aspect-video bg-muted rounded-lg hover:opacity-90 transition-opacity">
                  <Image
                    unoptimized
                    loading="eager"
                    placeholder="empty"
                    src={image}
                    alt={name}
                    fill
                    sizes="100% 100%"
                    className="rounded-lg object-cover"
                  />
                </div>
              </Link>
            </div>
            <CardDescription>{description}</CardDescription>
          </div>

          {/* Badges */}
          <div>
            <div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
              <div className="flex flex-wrap gap-2">
                {category.map((cat) => (
                  <Badge
                    key={Math.random()}
                    className="font-medium opacity-75"
                    variant={"secondary"}
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
              <div className="invert">
                {paid == "Paid" && (
                  <Badge
                    className="font-normal opacity-100"
                    variant={"secondary"}
                  >
                    $$$
                  </Badge>
                )}
                {paid == "Free" && (
                  <Badge
                    className="font-normal opacity-100"
                    variant={"secondary"}
                  >
                    Free
                  </Badge>
                )}
                {paid == "Free Plan" && (
                  <Badge
                    className="font-normal opacity-100"
                    variant={"secondary"}
                  >
                    Free Plan
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};

export default ResourceCard;
