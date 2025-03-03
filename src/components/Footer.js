import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a2e; /* Dark background for contrast */
  color: #fff;
  padding: 80px 0 30px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--primary-gradient);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  margin-bottom: 60px;
`;

const FooterColumn = styled.div`
  h3 {
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 25px;
    position: relative;
    font-weight: 600;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 3px;
      background-color: var(--secondary-color);
      border-radius: 3px;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 12px;
  }
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    
    &:before {
      content: "→";
      opacity: 0;
      margin-right: 0;
      transform: translateX(-10px);
      display: inline-block;
      transition: all 0.3s ease;
    }
    
    &:hover {
      color: var(--secondary-color);
      padding-left: 22px;
      
      &:before {
        opacity: 1;
        margin-right: 5px;
        transform: translateX(0);
      }
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
    margin-bottom: 15px;
    font-size: 0.95rem;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    
    i {
      color: var(--secondary-color);
      margin-right: 15px;
      margin-top: 4px;
      font-size: 1.1rem;
    }
    
    div {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(147, 112, 255, 0.2);
    border-radius: 50%;
    transition: all 0.3s ease;
    
    i {
      color: var(--secondary-color);
      font-size: 1.1rem;
      transition: all 0.3s ease;
    }
    
    &:hover {
      background-color: var(--primary-color);
      transform: translateY(-5px);
      
      i {
        color: white;
      }
      
      &:before {
        display: none;
      }
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 25px;
  position: relative;
  
  input {
    flex-grow: 1;
    padding: 15px 20px;
    border: none;
    border-radius: 30px;
    font-size: 0.95rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9);
    
    &:focus {
      outline: none;
      background-color: white;
    }
  }
  
  button {
    position: absolute;
    right: 5px;
    top: 5px;
    bottom: 5px;
    background: var(--primary-gradient);
    color: white;
    border: none;
    padding: 0 25px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateX(3px);
      box-shadow: 0 3px 10px rgba(147, 112, 255, 0.3);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    
    a {
      color: var(--secondary-color);
      text-decoration: none;
      position: relative;
      transition: all 0.3s ease;
      
      &:hover {
        color: white;
      }
      
      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: white;
        transition: width 0.3s ease;
      }
      
      &:hover:after {
        width: 100%;
      }
    }
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;
  
  h2 {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    
    span {
      color: var(--secondary-color);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>
              <h2>Hundeschutz</h2>
            </FooterLogo>
            <p>
              Wir widmen uns dem Schutz, der Rehabilitation und der Vermittlung 
              von Hunden in Not. Unsere Mission ist es, für jeden Hund ein liebevolles 
              Zuhause zu finden und die Öffentlichkeit über verantwortungsvolle Haustierhaltung aufzuklären.
            </p>
            <SocialLinks>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Schnelllinks</h3>
            <ul>
              <li><Link to="/">Startseite</Link></li>
              <li><Link to="/about">Über Uns</Link></li>
              <li><Link to="/adoption">Hunde zur Adoption</Link></li>
              <li><Link to="/resources">Ressourcen</Link></li>
              <li><Link to="/donate">Spenden</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Kontaktinformationen</h3>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                Rettungsallee 123<br />
                Hundestadt, 10115 Berlin
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <div>+49 30 123 45678</div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>info@hundeschutz.de</div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                Mo-Fr: 9:00-18:00 Uhr<br />
                Sa-So: 10:00-16:00 Uhr
              </div>
            </div>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Newsletter</h3>
            <p>
              Abonnieren Sie unseren Newsletter, um Updates zu verfügbaren Hunden, 
              Erfolgsgeschichten und kommenden Veranstaltungen zu erhalten.
            </p>
            <NewsletterForm>
              <input type="email" placeholder="Ihre E-Mail" required />
              <button type="submit">
                Abonnieren
              </button>
            </NewsletterForm>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom>
          <p>
            &copy; {new Date().getFullYear()} Hundeschutz Organisation. Alle Rechte vorbehalten. 
            <span style={{ margin: '0 10px' }}>|</span>
            <Link to="/privacy">Datenschutz</Link>
            <span style={{ margin: '0 10px' }}>|</span>
            <Link to="/terms">Nutzungsbedingungen</Link>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
