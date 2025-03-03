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
  padding-top: 20px;
  padding-bottom: 40px;
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
