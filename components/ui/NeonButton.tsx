"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface TealButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  external?: boolean;
  className?: string;
}

export default function TealButton({
  href,
  children,
  variant = "filled",
  external = false,
  className = "",
}: TealButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-jost font-light text-sm tracking-widest uppercase transition-all duration-300";
  const filled =
    "btn-teal-fill bg-teal text-white hover:text-white border border-teal";
  const outlined =
    "border border-teal text-teal hover:bg-teal hover:text-white";

  const classes = `${base} ${variant === "filled" ? filled : outlined} ${className}`;

  const inner = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <Link href={href}>{inner}</Link>;
}
