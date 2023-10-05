import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle} className=" flex items-center justify-center p-1.5 mt-0.5">
    <svg width="25" height="25" viewBox="0 0 25 25">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 2 2.5 L 20 20" }
        }}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 9.423 L 20 9.423" },
          open: { d: "M 2 9.423 L 9.423"}
        }}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 2 20 L 20 2.5"}
        }}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);
