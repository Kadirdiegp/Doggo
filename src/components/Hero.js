import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  position: relative;
  height: ${props => props.height || '500px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  background-image: url(${props => props.backgroundImage || '/hero-image.jpg'});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, ${props => props.overlayOpacity || '0.4'});
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  color: white;
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  height, 
  overlayOpacity,
  children 
}) => {
  return (
    <HeroContainer 
      backgroundImage={backgroundImage} 
      height={height}
      overlayOpacity={overlayOpacity}
    >
      <HeroContent>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children && <ButtonContainer>{children}</ButtonContainer>}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
