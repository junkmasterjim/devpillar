"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme, systemTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      systemTheme === "light" ? setTheme("dark") : setTheme("light");
    } else theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Button
      variant={"outline"}
      className="h-9"
      size={"icon"}
      onClick={() => {
        toggleTheme();
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
