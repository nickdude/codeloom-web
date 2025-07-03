import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["Development", "Design", "Marketing"];

export default function HeroRotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentWord = words[index].split(""); // split into characters

  return (
    <h1 className='text-center font-grotesk font-medium text-[42px] sm:text-[46px] leading-[125%] tracking-[-1.04px] mt-4'>
      <span className='text-black'>
        Your Partner for Real Business <br /> Impact Through{" "}
        <span className='relative inline-block w-[300px] h-[60px] align-middle overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              className='absolute left-0 top-0 w-full text-brand text-center flex justify-center sm:justify-start gap-[1px]'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.03,
                    staggerDirection: -1,
                  },
                },
              }}>
              {currentWord.map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, filter: "blur(4px)" },
                    visible: { opacity: 1, filter: "blur(0px)" },
                    exit: { opacity: 0, filter: "blur(4px)" },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </span>
      </span>
    </h1>
  );
}
