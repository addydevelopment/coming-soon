'use client';

import { motion } from 'framer-motion';

const splitText = (text) => text.split('');

export default function SplitText({ text }) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: -50 }, // start 50px to the left & transparent
    visible: {
      opacity: 1,
      x: 0, // animate to original position
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const letters = splitText(text);

  return (
    <motion.div
      style={{
        display: 'flex',
        fontSize: '4rem',
        fontWeight: '700',
        color: 'white',
        letterSpacing: '0.05em',
        userSelect: 'none',
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
      role="heading"
      aria-level={1}
    >
      {letters.map((char, index) => {
        if (char === ' ') {
          return (
            <motion.div
              key={`space-${index}`}
              style={{ width: '0.5em' }}
              aria-hidden="true"
            >
              &nbsp;
            </motion.div>
          );
        }

        return (
          <motion.span key={char + '-' + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}