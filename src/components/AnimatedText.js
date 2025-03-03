import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TextContainer = styled(motion.div)`
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  position: relative;
`;

// Animation variants for the text
const containerVariants = {
  hidden: {},
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.08,
      delayChildren: i * 0.1,
    },
  }),
};

const wordVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const characterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const AnimatedText = ({ 
  text, 
  Component = "h2", 
  className = "", 
  once = true,
  threshold = 0.5,
  delay = 0
}) => {
  const words = text.split(" ");
  
  // Variants with custom delay
  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: {
        staggerChildren: 0.08,
        delayChildren: i * 0.1 + delay,
      },
    }),
  };

  return (
    <TextContainer
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      custom={1}
      as={Component}
    >
      {words.map((word, index) => (
        <Word key={index} variants={wordVariants}>
          {Array.from(word).map((char, index) => (
            <Character key={index} variants={characterVariants}>
              {char}
            </Character>
          ))}
          {index !== words.length - 1 && "\u00A0"}
        </Word>
      ))}
    </TextContainer>
  );
};

export default AnimatedText;
