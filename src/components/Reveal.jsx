"use client";

import { motion } from "motion/react";

// Fade/slide-in when scrolled into view. Keeps pages as server components:
// only this wrapper runs on the client.
const presets = {
  // headings and text: slide in from the right
  right: { initial: { opacity: 0, x: 18 }, duration: 0.8 },
  // profile side cards: slide in from the left
  left: { initial: { opacity: 0.1, x: -16 }, duration: 0.5 },
  // project cards
  up: { initial: { opacity: 0, y: 16 }, duration: 0.5 },
  // contact form
  upSlow: { initial: { opacity: 0, y: 18 }, duration: 0.8 },
};

const Reveal = ({ as = "div", from = "right", delay = 0, children, ...props }) => {
  const { initial, duration } = presets[from];
  const Component = motion[as];

  return (
    <Component
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
