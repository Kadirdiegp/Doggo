import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding-top: 80px; /* Increased from 20px to create more space below navigation */
  padding-bottom: 40px;
  
  @media (max-width: 768px) {
    padding-top: 100px; /* Even more space on mobile */
  }
`;

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <Navigation />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Layout;
