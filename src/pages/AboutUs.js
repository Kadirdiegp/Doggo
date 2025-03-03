import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const Section = styled.section`
  margin-bottom: 80px;
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--primary-color);
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: var(--secondary-color);
  }
`;

const MissionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MissionText = styled.div`
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: var(--text-color);
    font-size: 1.05rem;
  }
`;

const MissionImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
  
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 4px solid var(--secondary-color);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
    color: var(--primary-color);
  }
  
  .position {
    color: #777;
    font-style: italic;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-color);
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    gap: 10px;
    
    a {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--light-grey);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      transition: all 0.3s ease;
      
      &:hover {
        background-color: var(--primary-color);
        color: white;
        transform: translateY(-3px);
      }
    }
  }
`;

const SuccessStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const StoryCard = styled.div`
  background-color: var(--light-color);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .story-image {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  
  .story-content {
    padding: 25px;
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;
      color: var(--primary-color);
    }
    
    p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-color);
    }
  }
`;

// Sample data
const teamMembers = [
  {
    id: 1,
    name: 'Maria Schmidt',
    position: 'Gründerin & Leiterin',
    bio: 'Engagierte Tierschützerin mit 15 Jahren Erfahrung im Tierwohl.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
  },
  {
    id: 2,
    name: 'Dr. Thomas Weber',
    position: 'Tierarzt',
    bio: 'Spezialisiert auf Verhaltenstherapie und ganzheitliche Behandlung.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 3,
    name: 'Lisa Müller',
    position: 'Hundetrainerin',
    bio: 'Zertifizierte Trainerin mit Schwerpunkt auf positive Verstärkung.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80'
  }
];

const successStories = [
  {
    id: 1,
    dogName: 'Max',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=662&q=80',
    story: 'Von einem ängstlichen Streuner zu einem glücklichen Familienhund.',
    family: 'Familie Bauer'
  },
  {
    id: 2,
    dogName: 'Luna',
    image: 'https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    story: 'Nach schwerer Verletzung vollständig genesen und in liebevoller Familie.',
    family: 'Familie Koch'
  },
  {
    id: 3,
    dogName: 'Charlie',
    image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80',
    story: 'Von einem vernachlässigten Hund zu einem geliebten Begleiter.',
    family: 'Familie Schneider'
  }
];

const AboutUs = () => {
  return (
    <AboutContainer>
      <PageTitle>Über Uns</PageTitle>
      
      <Section>
        <SectionTitle>Unsere Mission</SectionTitle>
        <MissionContent>
          <MissionText>
            <p>
              Seit 2010 setzen wir uns für den Schutz und das Wohlergehen von Hunden ein. 
              Unsere Mission ist es, jedem Hund ein liebevolles Zuhause zu ermöglichen und 
              ein Bewusstsein für verantwortungsvolle Haustierhaltung zu schaffen.
            </p>
            <p>
              Wir bieten nicht nur eine sichere Zuflucht, sondern auch medizinische Versorgung, 
              Rehabilitation und liebevolle Betreuung für Hunde in Not. Durch unsere Arbeit 
              haben wir bereits hunderten von Hunden zu einem besseren Leben verholfen.
            </p>
          </MissionText>
          <MissionImageContainer>
            <img src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="Hunde in unserem Schutzzentrum" />
          </MissionImageContainer>
        </MissionContent>
      </Section>

      <Section>
        <SectionTitle>Unser Team</SectionTitle>
        <TeamGrid>
          {teamMembers.map(member => (
            <TeamMember key={member.id}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <div className="position">{member.position}</div>
              <p>{member.bio}</p>
            </TeamMember>
          ))}
        </TeamGrid>
      </Section>

      <Section>
        <SectionTitle>Erfolgsgeschichten</SectionTitle>
        <SuccessStories>
          {successStories.map(story => (
            <StoryCard key={story.id}>
              <img src={story.image} alt={story.dogName} className="story-image" />
              <div className="story-content">
                <h3>{story.dogName}</h3>
                <p>{story.story}</p>
                <p className="family">- {story.family}</p>
              </div>
            </StoryCard>
          ))}
        </SuccessStories>
      </Section>
    </AboutContainer>
  );
};

export default AboutUs;
