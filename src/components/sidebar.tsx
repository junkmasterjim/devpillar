"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/lib/resources";
import { LucideIcon, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ResponsiveDialog } from "./ResponsiveDialog";
import { LoginButton } from "./login-button";
import { SearchBar } from "./search-bar";
import { Button } from "./ui/button";

export const closeSheet = () => {
  document.getElementById("closeSheet")?.click();
};

export const Sidebar = () => {
  return (
    <>
      <div className="w-[360px] xl:block hidden p-2 bg-background border-r max-h-screen overflow-auto">
        <div className="py-8 flex items-center justify-center gap-4 flex-col">
          <Link href={"/"} className="flex items-center justify-center gap-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={512}
              height={512}
              className="size-16 rounded-2xl shadow-xl"
            />
            <p className="text-5xl">DevPillar</p>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your ultimate design & development resource
          </p>
          <LoginButton />
          <ResponsiveDialog />
        </div>

        <div className="flex flex-col gap-2">
          <SearchBar />
        </div>

        <div className="py-4 px-2">
          <p className="font-bold mb-2">Categories</p>

          <div
          // className="overflow-auto pb-2 max-h-[calc((100vh-64px)/1.12)]"
          >
            {categories.map((cat: { name: string; icon: LucideIcon }) => (
              <Button
                key={cat.name}
                asChild
                variant={"link"}
                className="my-1 px-2 text-left block text-muted-foreground hover:text-foreground transition-all"
              >
                <Link href={`/categories/${cat.name}`}>
                  <cat.icon className="h-4 w-4 mr-2 inline" />
                  {cat.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild className="fixed xl:hidden top-4 right-4 z-50">
          <Button size={"icon"}>
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"bottom"}
          className="p-2 bg-background border-r max-h-screen overflow-auto px-8"
        >
          <SheetClose id="closeSheet" />
          <div className="flex items-center justify-center gap-4 flex-col h-64 fixed top-0 left-0 w-full p-2 bg-gradient-to-b from-background  from-90%">
            <Link
              href={"/"}
              className="flex items-center justify-center gap-4"
              onClick={closeSheet}
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={512}
                height={512}
                className="size-16 rounded-2xl shadow-xl"
              />
              <p className="text-5xl">DevPillar</p>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your ultimate design & development resource
            </p>
            <div className="grid grid-cols-2 w-full gap-2">
              <ResponsiveDialog />
              <LoginButton />
            </div>
          </div>

          <div className="mt-56">
            <div className="w-full">
              <SearchBar />
            </div>
            <p className="font-bold mb-2 mt-4">Categories</p>

            <div className="pb-4">
              {categories.map((cat: { name: string; icon: LucideIcon }) => (
                <Button
                  key={cat.name}
                  asChild
                  variant={"link"}
                  className="my-1 px-2 text-left block text-muted-foreground hover:text-foreground transition-all"
                >
                  <Link href={`/categories/${cat.name}`}>
                    <cat.icon className="h-4 w-4 mr-2 inline" />
                    {cat.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
