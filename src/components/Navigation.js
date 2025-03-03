import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 15px 0;
  
  &.scrolled {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 15px 0;
    height: 70px;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
  
  @media (max-width: 768px) {
    height: 50px;
    padding: 0 16px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    
    img {
      height: 32px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  margin-left: 40px;
  font-weight: 500;
  position: relative;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: var(--primary-color);
    
    &:after {
      width: 100%;
    }
  }
`;

const ContactButton = styled(Link)`
  margin-left: 40px;
  padding: 10px 20px;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none;
  position: relative;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  .bar {
    display: block;
    width: 100%;
    height: 2px;
    margin: 6px 0;
    background-color: var(--text-color);
    transition: all 0.3s ease;
  }
  
  &.open {
    .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    .bar:nth-child(2) {
      opacity: 0;
    }
    
    .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-100%'};
  width: 70%;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  padding: 100px 40px;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 480px) {
    width: 85%;
    padding: 80px 30px;
  }
  
  a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1.2rem;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    transition: all 0.3s ease;
    
    &:hover, &.active {
      color: var(--primary-color);
      padding-left: 10px;
    }
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
      padding: 12px 0;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 0.3s ease;
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
`;

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);
  
  return (
    <NavContainer className={scrolled ? 'scrolled' : ''}>
      <NavContent>
        <Logo to="/">
          <span>Hundeschutz</span>
        </Logo>
        
        <NavLinks>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            Über Uns
          </NavLink>
          <NavLink to="/adoption" className={location.pathname === '/adoption' ? 'active' : ''}>
            Adoption
          </NavLink>
          <NavLink to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>
            Ressourcen
          </NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Kontakt
          </NavLink>
          <ContactButton to="/donate">Jetzt Spenden</ContactButton>
        </NavLinks>
        
        <MobileMenuButton 
          onClick={toggleMobileMenu}
          className={mobileMenuOpen ? 'open' : ''}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </MobileMenuButton>
      </NavContent>
      
      <MobileMenu $isOpen={mobileMenuOpen}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Startseite
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          Über Uns
        </Link>
        <Link to="/adoption" className={location.pathname === '/adoption' ? 'active' : ''}>
          Adoption
        </Link>
        <Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>
          Ressourcen
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Kontakt
        </Link>
        <Link to="/donate" className={location.pathname === '/donate' ? 'active' : ''}>
          Jetzt Spenden
        </Link>
      </MobileMenu>
      
      <Overlay $isOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
    </NavContainer>
  );
};

export default Navigation;
