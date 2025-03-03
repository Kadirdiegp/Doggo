import React, { useState } from 'react';
import styled from 'styled-components';

const DonateContainer = styled.div`
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

const HeroSection = styled.section`
  background: linear-gradient(45deg, var(--primary-color), rgba(147, 112, 255, 0.8));
  border-radius: 15px;
  padding: 60px 40px;
  margin-bottom: 60px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 30px rgba(147, 112, 255, 0.3);
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 30px;
    line-height: 1.7;
    opacity: 0.9;
  }
  
  .cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const CTAButton = styled.button`
  padding: 16px 32px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &.primary {
    background-color: var(--secondary-color);
    color: var(--text-color);
    border: none;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: white;
      color: var(--primary-color);
      transform: translateY(-5px);
    }
  }
`;

const DonationOptionsSection = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
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
    width: 80px;
    height: 3px;
    background-color: var(--secondary-color);
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const OptionCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }
  
  p {
    margin-bottom: 25px;
    line-height: 1.6;
    color: var(--text-color);
    flex-grow: 1;
  }
  
  button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: center;
    
    &:hover {
      background-color: darken(var(--primary-color), 10%);
      transform: translateY(-3px);
    }
  }
`;

const DonationFormSection = styled.section`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  margin-bottom: 60px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const DonationForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-color);
  }
  
  input, select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: var(--primary-color);
      outline: none;
      box-shadow: 0 0 0 2px rgba(147, 112, 255, 0.2);
    }
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  margin-top: 30px;
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ImpactSection = styled.section`
  margin-bottom: 60px;
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

const ImpactCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }
  
  p {
    line-height: 1.6;
    color: var(--text-color);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
  };
  
  return (
    <DonateContainer>
      <PageTitle>Spenden</PageTitle>
      
      <HeroSection>
        <h2>Helfen Sie uns, Hunde zu retten</h2>
        <p>
          Ihre Spende hilft uns dabei, verlassenen und misshandelten Hunden ein neues Zuhause zu geben.
          Jeder Euro zählt und macht einen Unterschied im Leben dieser treuen Gefährten.
        </p>
        <div className="cta-buttons">
          <CTAButton className="primary">Jetzt spenden</CTAButton>
          <CTAButton className="secondary">Mehr erfahren</CTAButton>
        </div>
      </HeroSection>
      
      <DonationOptionsSection>
        <SectionTitle>Wie Sie helfen können</SectionTitle>
        <OptionsGrid>
          <OptionCard>
            <div className="icon">🐾</div>
            <h3>Einmalige Spende</h3>
            <p>
              Unterstützen Sie uns mit einer einmaligen Spende. Jeder Betrag hilft uns,
              Hunden in Not die bestmögliche Versorgung zu bieten.
            </p>
            <button>Jetzt spenden</button>
          </OptionCard>
          
          <OptionCard>
            <div className="icon">💝</div>
            <h3>Monatliche Spende</h3>
            <p>
              Werden Sie Dauerspender und helfen Sie uns nachhaltig. Ihre regelmäßige
              Unterstützung ermöglicht uns langfristige Planung und kontinuierliche Hilfe.
            </p>
            <button>Dauerspender werden</button>
          </OptionCard>
          
          <OptionCard>
            <div className="icon">🏠</div>
            <h3>Sachspenden</h3>
            <p>
              Spenden Sie Futter, Decken, Spielzeug oder andere Hilfsmittel.
              Kontaktieren Sie uns für eine Liste der aktuell benötigten Artikel.
            </p>
            <button>Mehr erfahren</button>
          </OptionCard>
        </OptionsGrid>
      </DonationOptionsSection>
      
      <DonationFormSection>
        <SectionTitle>Spendenformular</SectionTitle>
        <DonationForm onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <label>Vorname</label>
              <input type="text" required />
            </FormGroup>
            <FormGroup>
              <label>Nachname</label>
              <input type="text" required />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <label>E-Mail</label>
            <input type="email" required />
          </FormGroup>
          
          <FormGroup>
            <label>Spendenart</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="one-time"
                  checked={donationType === 'one-time'}
                  onChange={(e) => setDonationType(e.target.value)}
                />
                Einmalig
              </label>
              <label>
                <input
                  type="radio"
                  value="monthly"
                  checked={donationType === 'monthly'}
                  onChange={(e) => setDonationType(e.target.value)}
                />
                Monatlich
              </label>
            </div>
          </FormGroup>
          
          <FormGroup>
            <label>Spendenbetrag</label>
            <div className="amount-options">
              <label>
                <input
                  type="radio"
                  id="amount-10"
                  value="10"
                  checked={donationAmount === '10'}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
                10€
              </label>
              <label>
                <input
                  type="radio"
                  id="amount-25"
                  value="25"
                  checked={donationAmount === '25'}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
                25€
              </label>
              <label>
                <input
                  type="radio"
                  id="amount-50"
                  value="50"
                  checked={donationAmount === '50'}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
                50€
              </label>
              <label>
                <input
                  type="radio"
                  id="amount-100"
                  value="100"
                  checked={donationAmount === '100'}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
                100€
              </label>
              <label>
                <input
                  type="radio"
                  id="amount-custom"
                  value="custom"
                  checked={donationAmount === 'custom'}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
                Anderer Betrag
              </label>
            </div>
            
            {donationAmount === 'custom' && (
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Betrag eingeben"
                min="1"
                step="1"
              />
            )}
          </FormGroup>
          
          <FormGroup>
            <label>Nachricht (optional)</label>
            <textarea rows="4" placeholder="Ihre Nachricht an uns"></textarea>
          </FormGroup>
          
          <SubmitButton type="submit">
            Spende absenden
          </SubmitButton>
        </DonationForm>
      </DonationFormSection>
      
      <ImpactSection>
        <SectionTitle>Ihre Spende bewirkt Großes</SectionTitle>
        <ImpactGrid>
          <ImpactCard>
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" alt="Medizinische Versorgung" />
            <h3>Medizinische Versorgung</h3>
            <p>
              Ihre Spende ermöglicht die tierärztliche Behandlung, Impfungen
              und regelmäßige Gesundheitschecks für unsere Schützlinge.
            </p>
          </ImpactCard>
          
          <ImpactCard>
            <img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" alt="Futter & Pflege" />
            <h3>Futter & Pflege</h3>
            <p>
              Mit Ihrer Hilfe können wir hochwertiges Futter, Pflegeprodukte
              und alles Notwendige für das Wohlbefinden der Hunde bereitstellen.
            </p>
          </ImpactCard>
          
          <ImpactCard>
            <img src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Unterbringung" />
            <h3>Unterbringung</h3>
            <p>
              Ihre Unterstützung hilft uns, sichere und komfortable Unterkünfte
              für unsere Hunde zu schaffen und zu erhalten.
            </p>
          </ImpactCard>
        </ImpactGrid>
      </ImpactSection>
    </DonateContainer>
  );
};

export default Donate;