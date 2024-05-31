"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Category, categories } from "@/lib/resources";
import { Menu, Minus, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { LoginButton } from "./login-button";
import { SearchBar } from "./search-bar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

export const closeSheet = () => {
  document.getElementById("closeSheet")?.click();
};

export const Sidebar = () => {
  let pathname = usePathname();
  while (pathname.includes("%26")) {
    pathname = pathname.replace("%26", "&");
  }
  while (pathname.includes("%20")) {
    pathname = pathname.replace("%20", " ");
  }

  return (
    <>
      <div className="w-[360px] xl:block hidden p-2 bg-background border-r max-h-screen overflow-hidden">
        <div className="py-8 flex items-center justify-center gap-4 flex-col">
          <Link href={"/"} className="flex items-center justify-center gap-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={512}
              height={512}
              className="size-16 rounded-2xl shadow-lg dark:invert "
            />
            <p className="text-5xl tracking-tighter">DevPillar</p>
          </Link>
          <p className="text-sm text-muted-foreground tracking-tight">
            Your ultimate design & development resource
          </p>
          <div className="flex gap-2 place-items-center w-full">
            <LoginButton />
            <ModeToggle />
          </div>
          <Button asChild className="w-full" variant={"secondary"}>
            <Link href={"https://github.com/noahpittman/devpillar/"}>
              <PlusCircle className="mr-2" size={24} />
              Add a resource
            </Link>
          </Button>
        </div>

        <div className="max-h-[calc(100svh-288px)] overflow-auto pr-2">
          <div className="flex flex-col gap-2">
            <SearchBar />
          </div>

          <div className="py-4 px-2">
            <p className="font-bold mb-2">Categories</p>

            <div
            // className="overflow-auto pb-2 max-h-[calc((100vh-64px)/1.12)]"
            >
              {categories.map((cat: Category) => (
                <span key={cat.name}>
                  <Button
                    key={cat.name}
                    asChild
                    variant={"link"}
                    className={cn(
                      "my-1 px-2 text-left block text-muted-foreground hover:text-foreground transition-all",
                      pathname.includes(cat.name)
                        ? "font-semibold underline text-foreground"
                        : null,
                    )}
                  >
                    <Link href={`/categories/${cat.name}`}>
                      <cat.icon className="h-4 w-4 mr-2 inline" />
                      {cat.name}
                    </Link>
                  </Button>

                  {cat.subcategories
                    .sort((a, b) => a.localeCompare(b))
                    .map((sub) => (
                      <Button
                        key={sub}
                        asChild
                        variant={"link"}
                        className={cn(
                          "px-2 text-left block text-muted-foreground hover:text-foreground transition-all ml-4 h-auto text-xs",
                          pathname.split("/")[2] ===
                            cat.subcategories[cat.subcategories.indexOf(sub)]
                            ? "font-semibold underline text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        <Link href={`/categories/${sub}`}>
                          <Minus className="h-4 w-4 mr-2 inline" />
                          {sub}
                        </Link>
                      </Button>
                    ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild className="fixed xl:hidden top-2 right-2 z-50">
          <Button size={"icon"} variant={"ghost"} className="backdrop-blur">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"bottom"}
          className="p-2 bg-background border-r max-h-screen h-full overflow-hidden px-8"
        >
          <SheetClose id="closeSheet" />
          <div className="flex items-center gap-4 flex-col h-52 top-0 left-0 w-full p-2 bg-gradient-to-b from-background  from-90%">
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
                className="size-16 rounded-2xl shadow-lg dark:invert"
              />
              <p className="text-5xl tracking-tighter">DevPillar</p>
            </Link>
            <p className="text-muted-foreground text-sm tracking-tight">
              Your ultimate design & development resource
            </p>
            <div className="grid grid-cols-2 w-full gap-2">
              <Button asChild className="w-full" variant={"secondary"}>
                <Link href={"https://github.com/noahpittman/devpillar/"}>
                  <PlusCircle className="mr-2" size={24} />
                  Add a resource
                </Link>
              </Button>
              <div className="flex gap-2 place-items-center w-full">
                <LoginButton />
                <ModeToggle />
              </div>
            </div>
          </div>

          <div className="max-h-[calc(100svh-256px)]  overflow-auto pr-2">
            <div className="w-full">
              <SearchBar />
            </div>
            <p className="font-bold mb-2 mt-4">Categories</p>

            <div className="pb-4">
              {categories.map((cat: Category) => (
                <span key={cat.name}>
                  <Button
                    key={cat.name}
                    asChild
                    variant={"link"}
                    className="my-1 px-2 text-left block text-muted-foreground hover:text-foreground transition-all"
                  >
                    <Link href={`/categories/${cat.name}`} onClick={closeSheet}>
                      <cat.icon className="h-4 w-4 mr-2 inline" />
                      {cat.name}
                    </Link>
                  </Button>

                  {cat.subcategories
                    .sort((a, b) => a.localeCompare(b))
                    .map((sub) => (
                      <Button
                        key={sub}
                        asChild
                        variant={"link"}
                        className="px-2 text-left block text-muted-foreground hover:text-foreground transition-all ml-4 h-auto text-xs"
                      >
                        <Link href={`/categories/${sub}`} onClick={closeSheet}>
                          <Minus className="h-4 w-4 mr-2 inline" />
                          {sub}
                        </Link>
                      </Button>
                    ))}
                </span>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
