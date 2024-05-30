"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    document
      .getElementById("searchButton")
      ?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (search.trim() !== "") {
            router.push(`/search?q=${search}`);
          }
        }
      });

    return () => {
      document
        .getElementById("searchButton")
        ?.removeEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (search.trim() !== "") {
              router.push(`/search?q=${search}`);
            }
          }
        });
    };
  }, [router, search]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (search.trim() !== "") {
          router.push(`/search?q=${search}`);
        }
      }}
    >
      <span className="flex items-center justify-between border rounded">
        <span
          className="px-2"
          onClick={() => {
            document.getElementById("search")?.focus();
          }}
        >
          <Search />
        </span>
        <Input
          type="text"
          value={search}
          onSubmit={(e) => {
            e.preventDefault();
            if (search.trim() !== "") {
              router.push(`/search?q=${search}`);
            }
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          id="search"
          name="search"
          className="placeholder:text-muted-foreground/50 border-0"
          placeholder={`Search for a resource`}
        />
      </span>
    </form>
  );
};
