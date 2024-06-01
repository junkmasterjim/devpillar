"use client";
import { resources } from "@/lib/resources";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const ExpandBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    // IS OPEN
    // IS OPEN
    // IS OPEN
    <AnimatePresence>
      <motion.div
        onClick={() => setIsOpen(false)}
        layout
        layoutId="expand-badge"
        style={{
          height: 32,
          padding: "8px",
          paddingInline: "16px",
          borderRadius: 9999,
        }}
        className="flex items-center border border-neutral-400 rounded-full justify-center text-sm text-muted-foreground cursor-pointer"
      >
        <motion.div
          layoutId="inner-content"
          className="flex items-center justify-center gap-1"
        >
          <motion.span layoutId="leftSide" animate={{ scale: 1 }}>
            We currently have
          </motion.span>
          <motion.p
            layoutId="number"
            className="text-sm text-muted-foreground tracking-tight group whitespace-nowrap"
          >
            {Math.floor(resources.length / 10) * 10}+ resources
          </motion.p>
          <motion.span layoutId="rightSide" animate={{ scale: 1 }}>
            for you to explore.
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : (
    // IS NOT OPEN
    // IS NOT OPEN
    // IS NOT OPEN
    <AnimatePresence>
      <motion.div
        onClick={() => setIsOpen(true)}
        layout
        layoutId="expand-badge"
        style={{
          height: 32,
          width: 32,
          padding: "8px",
          borderRadius: 9999,
          fontWeight: 600,
        }}
        className="size-9 p-2 border-neutral-200 rounded-full flex justify-center items-center cursor-pointer"
      >
        <motion.div
          layoutId="inner-content"
          className="flex items-center justify-center"
        >
          <motion.span
            layoutId="leftSide"
            className="absolute whitespace-nowrap"
            style={{ scale: 0 }}
          >
            We currently have{" "}
          </motion.span>
          <motion.p
            layoutId="number"
            className="text-sm text-muted-foreground tracking-tight group whitespace-nowrap hover:underline underline-offset-2"
          >
            {Math.floor(resources.length / 10) * 10}+ resources
          </motion.p>
          <motion.span
            layoutId="rightSide"
            className="absolute whitespace-nowrap"
            style={{ scale: 0 }}
          >
            for you to explore.
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
