import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components for card and its parts
const CardContainer = styled(motion.div)`
  background: var(--light-color, #ffffff);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark, #1a1a1a);
`;

const CardDescription = styled.p`
  margin: 0 0 1rem;
  font-size: 0.95rem;
  color: var(--text-muted, #666666);
  line-height: 1.5;
`;

const CardFooter = styled.div`
  padding: 0 1.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardTag = styled.span`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  background: var(--light-accent, #f3f4f6);
  color: var(--primary-color, #3b82f6);
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

// Animation variants
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  },
  hover: { 
    y: -5,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  }
};

const Card = ({ 
  image,
  title,
  description,
  tags = [],
  footer,
  className = "",
  style = {},
  onClick,
  delay = 0,
  whileInView = true
}) => {
  return (
    <CardContainer
      className={className}
      style={style}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover="hover"
      onClick={onClick}
      transition={{ delay }}
      whileInView={whileInView ? "show" : undefined}
      viewport={{ once: true, threshold: 0.3 }}
    >
      {image && (
        <CardImage>
          <motion.img
            src={image}
            alt={title}
            variants={imageVariants}
          />
        </CardImage>
      )}
      
      <CardContent>
        {tags.length > 0 && (
          <CardTagContainer>
            {tags.map((tag, index) => (
              <CardTag key={index}>{tag}</CardTag>
            ))}
          </CardTagContainer>
        )}
        
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
