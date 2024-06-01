"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  // check if user has scrolled more then 1000px if true then show the button
  const [visibleToTop, setVisibleToTop] = useState(false);

  const toggleVisibleToTop = () => {
    const scrolled = document.getElementById("mainContent")?.scrollTop || 0;
    if (scrolled > 1000) {
      setVisibleToTop(true);
    } else if (scrolled <= 1000) {
      setVisibleToTop(false);
    }
  };
  useEffect(() => {
    document
      .getElementById("mainContent")
      ?.addEventListener("scroll", toggleVisibleToTop);
    return () => {
      document
        .getElementById("mainContent")
        ?.removeEventListener("scroll", toggleVisibleToTop);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="toTop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="xl:hidden"
      >
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => {
            document
              .getElementById("mainContent")
              ?.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`h-8 w-8 bottom-3 fixed right-3 z-50 opacity-90 hover:opacity-100 transition-opacity duration-300 ${
            !visibleToTop && "opacity-0 pointer-events-none "
          }`}
        >
          <ChevronsUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
