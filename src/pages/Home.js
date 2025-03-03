import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import heroImage from '../assets/opener/Image.png';

const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Section = styled.section`
  padding: 100px 20px;
  background: ${props => props.$bgColor || 'transparent'};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--background-color) 0%, #f8f9fa 100%);
  padding: 0;
  
  @media (max-width: 768px) {
    min-height: 80vh;
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

const HeroContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
    margin-top: 20px;
  }
`;

const HeroTitle = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1200px;
  
  .hero-image {
    width: 100%;
    height: auto;
    border-radius: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    margin-top: 10px;
    
    .hero-image {
      border-radius: 20px;
    }
  }
`;

const Subtitle = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem;
  
  h1 {
    font-size: 4rem;
    font-weight: 800;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      padding: 0 10px;
    }
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-color);
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.6;
      padding: 0 15px;
      margin-bottom: 0.5rem;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const CTASection = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
    margin-top: 1rem;
    padding: 0 10px;
  }
`;

const Button = styled(motion(Link))`
  padding: 16px 32px;
  background: ${props => props.$primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.$primary ? 'white' : 'var(--primary-color)'};
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    background: ${props => props.$primary ? 'var(--primary-color-dark)' : 'var(--primary-color)'};
    color: white;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  span {
    display: block;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--secondary-color);
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }
  
  h2 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin: 0;
    line-height: 1.3;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 1400px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
`;

const ServiceCard = styled(Card)`
  text-align: center;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .icon {
    width: 80px;
    height: 80px;
    background: var(--light-color);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2.5rem;
  }
  
  h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  p {
    color: var(--text-color);
    line-height: 1.6;
    margin: 0;
  }
`;

const ProcessStep = styled(Card)`
  text-align: center;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .step-number {
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  p {
    color: var(--text-color);
    line-height: 1.6;
    margin: 0;
  }
`;

const StatsSection = styled(Section)`
  background: var(--primary-color);
  color: white;
  text-align: center;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Stat = styled.div`
  .number {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .label {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const ProcessSection = styled(Section)`
  background: #f8f9fa;
`;

const TestimonialCard = styled(Card)`
  .quote {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-color);
    margin-bottom: 2rem;
    font-style: italic;
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: 15px;
    
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .info {
      h4 {
        font-size: 1.1rem;
        color: var(--primary-color);
        margin-bottom: 5px;
      }
      
      p {
        font-size: 0.9rem;
        color: var(--grey-color);
      }
    }
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <HeroTitle variants={fadeInUp}>
              <img 
                src={heroImage} 
                alt="Glücklicher Hund findet sein Zuhause" 
                className="hero-image"
              />
            </HeroTitle>
            
            <Subtitle>
              <motion.h1 variants={fadeInUp}>
                Geben Sie einem Hund eine zweite Chance auf Glück
              </motion.h1>
              <motion.p variants={fadeInUp}>
                Jeder Hund verdient ein liebevolles Zuhause. Gemeinsam können wir das Leben dieser treuen Gefährten verändern.
              </motion.p>
            </Subtitle>

            <CTASection>
              <Button 
                to="/adoption" 
                $primary
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jetzt Adoptieren
              </Button>
              <Button 
                to="/spenden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Spenden
              </Button>
            </CTASection>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <Section ref={servicesRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionTitle>
              <span>UNSERE DIENSTE</span>
              <h2>Wie wir helfen</h2>
            </SectionTitle>
            
            <Grid>
              <ServiceCard>
                <div className="icon">🏠</div>
                <h3>Sicherer Unterschlupf</h3>
                <p>Wir bieten einen warmen und sicheren Ort für Hunde in Not, bis sie ihr perfektes Zuhause finden.</p>
              </ServiceCard>
              <ServiceCard>
                <div className="icon">💊</div>
                <h3>Medizinische Versorgung</h3>
                <p>Umfassende tierärztliche Betreuung für jeden Hund in unserer Obhut.</p>
              </ServiceCard>
              <ServiceCard>
                <div className="icon">🦮</div>
                <h3>Training & Sozialisierung</h3>
                <p>Professionelles Training und Verhaltensunterstützung für eine erfolgreiche Adoption.</p>
              </ServiceCard>
              <ServiceCard>
                <div className="icon">❤️</div>
                <h3>Adoptionsunterstützung</h3>
                <p>Begleitung und Beratung während des gesamten Adoptionsprozesses.</p>
              </ServiceCard>
            </Grid>
          </motion.div>
        </Container>
      </Section>

      <StatsSection ref={statsRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <StatGrid>
              {[
                { number: "500+", label: "Gerettete Hunde" },
                { number: "300+", label: "Erfolgreiche Adoptionen" },
                { number: "50+", label: "Freiwillige Helfer" },
                { number: "10", label: "Jahre Erfahrung" }
              ].map((stat, index) => (
                <Stat
                  key={stat.label}
                  variants={fadeInUp}
                >
                  <div className="number">{stat.number}</div>
                  <div className="label">{stat.label}</div>
                </Stat>
              ))}
            </StatGrid>
          </motion.div>
        </Container>
      </StatsSection>

      <ProcessSection ref={processRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionTitle>
              <span>DER PROZESS</span>
              <h2>So funktioniert die Adoption</h2>
            </SectionTitle>
            
            <Grid>
              <ProcessStep>
                <div className="step-number">1</div>
                <h3>Erste Kontaktaufnahme</h3>
                <p>Füllen Sie unser Anfrageformular aus und erzählen Sie uns von Ihrer Situation.</p>
              </ProcessStep>
              <ProcessStep>
                <div className="step-number">2</div>
                <h3>Kennenlernen</h3>
                <p>Besuchen Sie uns und lernen Sie unsere Hunde in einer entspannten Atmosphäre kennen.</p>
              </ProcessStep>
              <ProcessStep>
                <div className="step-number">3</div>
                <h3>Hausbesuch</h3>
                <p>Wir besuchen Sie zu Hause, um sicherzustellen, dass alles für Ihren neuen Freund vorbereitet ist.</p>
              </ProcessStep>
              <ProcessStep>
                <div className="step-number">4</div>
                <h3>Adoption & Nachbetreuung</h3>
                <p>Nach erfolgreicher Vermittlung bleiben wir in Kontakt und unterstützen Sie bei Fragen.</p>
              </ProcessStep>
            </Grid>
          </motion.div>
        </Container>
      </ProcessSection>

      <Section ref={testimonialsRef}>
        <Container>
          <motion.div
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionTitle>
              <span>Erfahrungsberichte</span>
              <h2>Was unsere Adoptiveltern sagen</h2>
            </SectionTitle>
            
            <Grid>
              {[
                {
                  quote: "Die Adoption von Max war die beste Entscheidung unseres Lebens. Das Team war während des gesamten Prozesses unglaublich hilfsbereit und professionell.",
                  name: "Familie Müller",
                  role: "Adoptierten Max vor 2 Jahren",
                  image: "/testimonials/mueller.jpg"
                },
                {
                  quote: "Wir sind so dankbar für die Unterstützung und Beratung. Luna hat sich perfekt in unsere Familie eingefügt.",
                  name: "Sarah Schmidt",
                  role: "Adoptierte Luna vor 1 Jahr",
                  image: "/testimonials/schmidt.jpg"
                },
                {
                  quote: "Der Adoptionsprozess war unkompliziert und transparent. Heute können wir uns ein Leben ohne unseren Bello nicht mehr vorstellen.",
                  name: "Thomas Weber",
                  role: "Adoptierte Bello vor 6 Monaten",
                  image: "/testimonials/weber.jpg"
                }
              ].map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  variants={fadeInUp}
                >
                  <div className="quote">{testimonial.quote}</div>
                  <div className="author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </TestimonialCard>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>
    </HomeContainer>
  );
};

export default Home;
