import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled components for various animation types
const AnimatedElement = styled(motion.div)`
  display: inline-block;
`;

const PulseWrapper = styled(AnimatedElement)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ShakeWrapper = styled(AnimatedElement)`
  transform-origin: center;
`;

const FloatWrapper = styled(AnimatedElement)`
  display: inline-block;
`;

const SpinWrapper = styled(AnimatedElement)`
  display: inline-block;
`;

// Animation variants for different effects
const pulseVariants = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut" 
    }
  },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};

const shakeVariants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: [0, -1, 1, -1, 0],
    transition: { 
      duration: 0.5,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 3,
      ease: "easeInOut" 
    }
  },
  hover: { 
    rotate: [0, -2, 2, -2, 0],
    transition: { duration: 0.5 }
  }
};

const floatVariants = {
  initial: { y: 0 },
  animate: { 
    y: [0, -8, 0],
    transition: { 
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut" 
    }
  },
  hover: { 
    y: -10,
    transition: { duration: 0.5 }
  }
};

const spinVariants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 360,
    transition: { 
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear" 
    }
  },
  hover: { 
    rotate: 360,
    transition: { duration: 0.8 }
  }
};

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const MicroAnimation = ({ 
  children, 
  type = "pulse", // pulse, shake, float, spin, fade
  animate = true,
  whileHover = true,
  whileTap = true,
  className = "",
  style = {},
  delay = 0,
  ...props
}) => {
  let Wrapper;
  let variants;
  
  // Determine which animation variant to use
  switch(type) {
    case "pulse":
      Wrapper = PulseWrapper;
      variants = pulseVariants;
      break;
    case "shake":
      Wrapper = ShakeWrapper;
      variants = shakeVariants;
      break;
    case "float":
      Wrapper = FloatWrapper;
      variants = floatVariants;
      break;
    case "spin":
      Wrapper = SpinWrapper;
      variants = spinVariants;
      break;
    case "fade":
      Wrapper = AnimatedElement;
      variants = fadeVariants;
      break;
    default:
      Wrapper = AnimatedElement;
      variants = pulseVariants;
  }
  
  return (
    <Wrapper
      className={className}
      style={style}
      variants={variants}
      initial="initial"
      animate={animate ? "animate" : "initial"}
      whileHover={whileHover ? "hover" : ""}
      whileTap={whileTap ? { scale: 0.95 } : ""}
      transition={{ 
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default MicroAnimation;
