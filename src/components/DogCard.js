import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${CardContainer}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #333;
`;

const CardMeta = styled.div`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 15px;
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #555;
`;

const CardButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #e07a5f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-top: auto;
  
  &:hover {
    background-color: #d35f44;
  }
`;

const DogCard = ({ dog, showFullInfo = true, onClick }) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={dog.image} alt={dog.name} />
      </CardImage>
      <CardContent>
        <CardTitle>{dog.name}</CardTitle>
        
        {showFullInfo && (
          <CardMeta>
            {dog.breed} • {dog.age} • {dog.gender} • {dog.size}
          </CardMeta>
        )}
        
        <CardDescription>
          {showFullInfo ? dog.personality : `${dog.personality.substring(0, 100)}...`}
        </CardDescription>
        
        {showFullInfo && dog.tags && (
          <TagsContainer>
            {dog.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        )}
        
        <CardButton onClick={onClick}>
          {showFullInfo ? 'View Profile' : 'Learn More'}
        </CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default DogCard;
