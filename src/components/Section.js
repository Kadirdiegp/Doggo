import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: ${props => props.padding || '60px 0'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  position: relative;
  overflow: hidden;
  
  ${props => props.withTopDivider && `
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      max-width: 800px;
      height: 1px;
      background-color: #e7e7e7;
    }
  `}
  
  ${props => props.withBottomDivider && `
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      max-width: 800px;
      height: 1px;
      background-color: #e7e7e7;
    }
  `}
`;

const Container = styled.div`
  max-width: ${props => props.wide ? '1400px' : '1200px'};
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: ${props => props.align || 'center'};
  margin-bottom: ${props => props.hasContent ? '50px' : '0'};
  max-width: ${props => props.maxWidth || '800px'};
  margin-left: ${props => props.align === 'left' ? '0' : 'auto'};
  margin-right: ${props => props.align === 'right' ? '0' : 'auto'};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
  position: relative;
  
  ${props => props.underline && `
    &:after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: ${props.align === 'center' ? '50%' : '0'};
      transform: ${props.align === 'center' ? 'translateX(-50%)' : 'none'};
      width: 60px;
      height: 3px;
      background-color: #e07a5f;
    }
  `}
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-top: ${props => props.underline ? '25px' : '15px'};
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = ({
  title,
  subtitle,
  children,
  align = 'center',
  underline = true,
  wide = false,
  backgroundColor,
  padding,
  withTopDivider = false,
  withBottomDivider = false,
}) => {
  return (
    <SectionContainer 
      backgroundColor={backgroundColor}
      padding={padding}
      withTopDivider={withTopDivider}
      withBottomDivider={withBottomDivider}
    >
      <Container wide={wide}>
        {(title || subtitle) && (
          <SectionHeader align={align} hasContent={!!children}>
            {title && (
              <Title align={align} underline={underline}>
                {title}
              </Title>
            )}
            {subtitle && (
              <Subtitle underline={underline}>
                {subtitle}
              </Subtitle>
            )}
          </SectionHeader>
        )}
        {children}
      </Container>
    </SectionContainer>
  );
};

export default Section;
