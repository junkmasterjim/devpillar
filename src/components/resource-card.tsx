"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Share, Star } from "lucide-react";
import { toast } from "sonner";
import { Resource } from "@/lib/resources";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export const ResourceCard = ({
  resource,
  user,
  idx,
}: {
  resource: Resource;
  user?: User | null;
  idx: number;
}) => {
  const [userFavourites, setUserFavourites] = useState<string[]>([]);
  const [favTimeout, setFavTimeout] = useState<boolean>(true);

  const isFav = (r: string) => userFavourites.includes(r);

  const handleFav = async () => {
    if (!user) {
      toast.error("You need to be signed in to favourite a resource.");
      return;
    }

    if (favTimeout) {
      toast.error("Please wait a moment before trying again.");
      return;
    }

    const { data, error } = await supabase
      .from("userFavs")
      .select("*")
      .eq("email", user.email);
    if (error) console.error(error);

    if (data) {
      console.log(data);
      const favs = data[0].favs as string[];
      if (favs.includes(resource.name)) {
        const newFavs = favs.filter((fav) => fav !== resource.name);
        const { data, error } = await supabase
          .from("userFavs")
          .update({ favs: newFavs })
          .eq("email", user.email);
        if (error) {
          console.error(error);
          toast.error("An error occurred. Please try again.");
        } else {
          toast.success("Resource removed from favourites.");
          setUserFavourites(newFavs);
          setFavTimeout(true);
          setTimeout(() => setFavTimeout(false), 1000);
        }
      } else {
        const newFavs = [...favs, resource.name];
        const { data, error } = await supabase
          .from("userFavs")
          .update({ favs: newFavs })
          .eq("email", user.email);
        if (error) {
          console.error(error);
          toast.error("An error occurred. Please try again.");
        } else {
          toast.success("Resource added to favourites.");
          setUserFavourites(newFavs);
          setFavTimeout(true);
          setTimeout(() => setFavTimeout(false), 1000);
        }
      }
    }
  };

  useEffect(() => {
    const getFavs = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from("userFavs")
        .select("*")
        .eq("email", user.email);
      if (error) console.error(error);
      if (data) {
        setUserFavourites(data[0].favs);
      }
      setFavTimeout(false);
    };

    getFavs();
  }, [user]);

  return (
    <div
      key={resource.name}
      className={cn(
        "h-56 lg:h-80 aspect-[4/3] hover:bg-popover transition-colors relative",
        idx % 2 == 0 ? "odd:bg-muted" : "even:bg-muted",
      )}
    >
      <div className="grid grid-cols-[2fr,_1fr]">
        <div className="h-full grid grid-rows-[1fr,_auto,_0.5fr] divide-y-2">
          <Link
            href={resource.url + "/?ref=devpillar"}
            target="_blank"
            className="p-2"
          >
            <p className="text-lg font-semibold tracking-tighter inline-flex gap-2 place-items-center">
              {resource.name}
              <ArrowUpRight size={16} />
            </p>
            <p className="text-xs lg:line-clamp-3 line-clamp-2 text-muted-foreground leading-3 tracking-tight">
              {resource.description}
            </p>
          </Link>

          <Link href={resource.url + "/?ref=devpillar"} target="_blank">
            <Image
              src={resource.image}
              alt={resource.name}
              unoptimized
              height={90 * 2}
              width={160 * 2}
              className="object-cover aspect-video w-full group-hover:opacity-75 transition-opacity"
            />
          </Link>
          <div className="flex justify-between items-center h-full  text-xs tracking-tight lg:p-1 overflow-hidden">
            {user ? (
              <Button
                onClick={handleFav}
                disabled={favTimeout}
                size={"icon"}
                variant={"ghost"}
              >
                <Star
                  className={cn(
                    "size-5",
                    userFavourites.includes(resource.name) && "fill-foreground",
                  )}
                />
              </Button>
            ) : (
              <Button
                disabled={favTimeout}
                onClick={handleFav}
                size={"icon"}
                variant={"ghost"}
              >
                <Star
                  className={cn(
                    "size-5",
                    isFav(resource.name) ? "fill-foreground" : "fill-none",
                  )}
                />
              </Button>
            )}
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => {
                navigator.clipboard.writeText(resource.url + "/?ref=devpillar");
                toast.success("Link copied to clipboard.");
              }}
            >
              <Share className="size-5" />
            </Button>
          </div>
        </div>

        <Link
          href={resource.url + "/?ref=devpillar"}
          target="_blank"
          className="grid grid-rows-[1fr,_auto] h-56 lg:h-80 w-full text-sm divide-y-2 border-l-2"
        >
          <div className="flex flex-col h-full gap-2 text-sm tracking-tight p-1 overflow-hidden">
            <div>
              <p className="font-semibold tracking-tighter">Categories:</p>
              {resource.category.map((c) => (
                <p className="truncate" key={c}>
                  # {c}
                </p>
              ))}
            </div>

            <div className="text-xs">
              <p className="font-semibold tracking-tighter">Subcategories:</p>
              {resource.subcategory.map((c) => (
                <p className="truncate" key={c}>
                  ## {c}
                </p>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-center items-center py-1 text-sm font-medium tracking-tight text-muted-foreground">
            {resource.paid}
          </div>
        </Link>
      </div>
    </div>
  );
};
