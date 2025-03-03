import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyles = css`
  display: inline-block;
  padding: ${props => props.size === 'large' ? '12px 24px' : props.size === 'small' ? '8px 16px' : '10px 20px'};
  font-size: ${props => props.size === 'large' ? '1.1rem' : props.size === 'small' ? '0.9rem' : '1rem'};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  /* Style variants */
  ${props => {
    if (props.variant === 'outlined') {
      return css`
        background-color: transparent;
        color: #e07a5f;
        border: 2px solid #e07a5f;
        
        &:hover {
          background-color: #e07a5f;
          color: white;
        }
      `;
    } else if (props.variant === 'text') {
      return css`
        background-color: transparent;
        color: #e07a5f;
        border: none;
        padding-left: 0;
        padding-right: 0;
        
        &:hover {
          color: #d35f44;
          text-decoration: underline;
        }
      `;
    } else {
      return css`
        background-color: #e07a5f;
        color: white;
        border: none;
        
        &:hover {
          background-color: #d35f44;
        }
      `;
    }
  }}
  
  /* Full width */
  ${props => props.fullWidth && css`
    display: block;
    width: 100%;
  `}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const StyledLink = styled(Link)`
  ${buttonStyles}
`;

const StyledExternalLink = styled.a`
  ${buttonStyles}
`;

const Button = ({ children, to, href, ...props }) => {
  // If has internal link (to)
  if (to) {
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );
  }
  
  // If has external link (href)
  if (href) {
    return (
      <StyledExternalLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </StyledExternalLink>
    );
  }
  
  // Regular button
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
