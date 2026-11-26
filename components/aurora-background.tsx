"use client";
import * as React from "react";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function AuroraBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={className}>{children}</div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="aurora-background"
      >
        {children}
      </motion.div>
    </div>
  );
}
