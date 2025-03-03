import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin: ${props => props.margin || '60px 0'};
  text-align: center;
`;

const StatItem = styled.div`
  padding: 30px 20px;
  border-radius: 8px;
  background-color: ${props => props.backgroundColor || 'white'};
  box-shadow: ${props => props.shadow ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: ${props => props.hover ? 'translateY(-5px)' : 'none'};
  }
`;

const StatIcon = styled.div`
  margin-bottom: 15px;
  font-size: 2.5rem;
  color: #e07a5f;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
`;

const StatTitle = styled.div`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 5px;
`;

const StatDescription = styled.div`
  font-size: 0.9rem;
  color: #888;
`;

const Stats = ({ 
  stats, 
  backgroundColor,
  shadow = true,
  hover = true,
  margin
}) => {
  return (
    <StatsContainer margin={margin}>
      {stats.map((stat, index) => (
        <StatItem 
          key={index} 
          backgroundColor={backgroundColor}
          shadow={shadow}
          hover={hover}
        >
          {stat.icon && <StatIcon>{stat.icon}</StatIcon>}
          <StatValue>{stat.value}</StatValue>
          <StatTitle>{stat.title}</StatTitle>
          {stat.description && <StatDescription>{stat.description}</StatDescription>}
        </StatItem>
      ))}
    </StatsContainer>
  );
};

export default Stats;
