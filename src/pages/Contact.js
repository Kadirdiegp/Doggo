import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 60px;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  text-align: center;
  color: var(--primary-color);
  font-weight: 700;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: var(--secondary-color);
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: var(--primary-color);
    position: relative;
    padding-bottom: 15px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: var(--secondary-color);
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: var(--text-color);
  }
  
  input, select, textarea {
    width: 100%;
    padding: 12px 18px;
    border: 1px solid rgba(147, 112, 255, 0.2);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(147, 112, 255, 0.1);
    }
  }
  
  textarea {
    min-height: 180px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--button-shadow);
  
  &:hover {
    background-color: var(--dark-purple);
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: var(--primary-color);
    position: relative;
    padding-bottom: 15px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: var(--secondary-color);
    }
  }
`;

const InfoItem = styled.div`
  margin-bottom: 35px;
  padding-left: 15px;
  border-left: 3px solid var(--secondary-color);
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }
  
  p {
    margin-bottom: 8px;
    color: var(--text-color);
    line-height: 1.6;
    font-size: 1.05rem;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const MapSection = styled.div`
  margin-bottom: 80px;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
    color: var(--primary-color);
    position: relative;
    padding-bottom: 15px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: var(--secondary-color);
    }
  }
  
  .map-container {
    height: 450px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

const SocialSection = styled.section`
  text-align: center;
  margin-bottom: 80px;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: var(--primary-color);
    position: relative;
    padding-bottom: 15px;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: var(--secondary-color);
    }
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 25px;
    
    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: white;
      color: var(--primary-color);
      font-size: 1.5rem;
      transition: all 0.3s ease;
      box-shadow: var(--card-shadow);
      
      &:hover {
        background-color: var(--primary-color);
        color: white;
        transform: translateY(-5px);
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: var(--card-shadow);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <PageTitle>Kontakt</PageTitle>
      
      <ContactGrid>
        <ContactForm>
          <h2>Schreiben Sie uns</h2>
          <FormGroup>
            <label>Name</label>
            <input type="text" placeholder="Ihr vollständiger Name" />
          </FormGroup>
          <FormGroup>
            <label>E-Mail</label>
            <input type="email" placeholder="Ihre E-Mail-Adresse" />
          </FormGroup>
          <FormGroup>
            <label>Betreff</label>
            <select>
              <option value="">Bitte wählen Sie</option>
              <option value="adoption">Adoption</option>
              <option value="volunteer">Ehrenamt</option>
              <option value="donation">Spenden</option>
              <option value="other">Sonstiges</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Nachricht</label>
            <textarea placeholder="Ihre Nachricht an uns"></textarea>
          </FormGroup>
          <SubmitButton type="submit">Nachricht senden</SubmitButton>
        </ContactForm>

        <ContactInfo>
          <h2>Kontaktinformationen</h2>
          <InfoItem>
            <h3>Adresse</h3>
            <p>Hundestraße 123</p>
            <p>12345 Berlin</p>
            <p>Deutschland</p>
          </InfoItem>
          <InfoItem>
            <h3>Telefon & E-Mail</h3>
            <p>Tel: +49 (0) 30 123456789</p>
            <p>E-Mail: info@hundeschutz.de</p>
          </InfoItem>
          <InfoItem>
            <h3>Öffnungszeiten</h3>
            <p>Montag - Freitag: 9:00 - 17:00 Uhr</p>
            <p>Samstag: 10:00 - 14:00 Uhr</p>
            <p>Sonntag: geschlossen</p>
          </InfoItem>
        </ContactInfo>
      </ContactGrid>

      <MapSection>
        <h2>So finden Sie uns</h2>
        <div className="map-container">
          {/* Map implementation */}
        </div>
      </MapSection>

      <SocialSection>
        <h2>Folgen Sie uns</h2>
        <SocialLinks>
          <SocialLink href="#" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </SocialLink>
        </SocialLinks>
      </SocialSection>
    </ContactContainer>
  );
};

export default Contact;
