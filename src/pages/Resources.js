import React, { useState } from 'react';
import styled from 'styled-components';

const ResourcesContainer = styled.div`
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  padding: 12px 24px;
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 2px solid var(--primary-color);
  border-radius: ${props => props.position === 'left' ? '8px 0 0 8px' : props.position === 'right' ? '0 8px 8px 0' : '0'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-color)' : 'rgba(var(--primary-rgb), 0.1)'};
  }
`;

const GuidesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const GuideCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .guide-content {
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
      margin-bottom: 20px;
    }
    
    .read-more {
      display: inline-block;
      padding: 8px 20px;
      background-color: var(--primary-color);
      color: white;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: var(--secondary-color);
        transform: translateY(-3px);
      }
    }
  }
`;

const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
`;

const ArticleItem = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .article-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .article-content {
    padding: 25px;
    
    h3 {
      font-size: 1.6rem;
      margin-bottom: 10px;
      color: var(--primary-color);
    }
    
    .article-meta {
      font-size: 0.9rem;
      color: #777;
      margin-bottom: 15px;
      
      span {
        display: inline-block;
      }
    }
    
    p {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--text-color);
      margin-bottom: 20px;
    }
    
    .read-more {
      color: var(--primary-color);
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    .article-image {
      height: 200px;
    }
  }
`;

const FAQItem = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-color);
  }
`;

const Resources = () => {
  const [activeTab, setActiveTab] = useState('guides');
  
  const guides = [
    {
      id: 1,
      title: 'Welpenpflege-Leitfaden',
      description: 'Alles, was Sie über die Pflege Ihres neuen Welpen wissen müssen, von Impfungen bis zu Trainingsgrundsätzen.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80',
      link: '/resources/puppy-care'
    },
    {
      id: 2,
      title: 'Ernährung & Fütterung',
      description: 'Erfahren Sie mehr über richtige Ernährung, Portionsgrößen und Fütterungspläne für Hunde aller Altersgruppen und Größen.',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
      link: '/resources/nutrition'
    },
    {
      id: 3,
      title: 'Bewegung & Geistige Anregung',
      description: 'Halten Sie Ihren Hund körperlich fit und geistig angeregt mit diesen Übungs- und Beschäftigungsideen.',
      image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2688&q=80',
      link: '/resources/exercise'
    },
    {
      id: 4,
      title: 'Seniorenhunde-Pflege',
      description: 'Besondere Überlegungen und Pflegetipps für ältere Hunde, um ihnen zu helfen, komfortabel und glücklich zu bleiben.',
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      link: '/resources/senior-care'
    },
    {
      id: 5,
      title: 'Grundlegendes Training',
      description: 'Lernen Sie die Grundlagen des Hundetrainings mit positiver Verstärkung und bewährten Techniken.',
      image: 'https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      link: '/resources/training'
    },
    {
      id: 6,
      title: 'Pflegeessentials',
      description: 'Tipps und Anleitungen zur Pflege Ihres Hundes, einschließlich Fellpflege, Zahnpflege und mehr.',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
      link: '/resources/grooming'
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Die richtige Ernährung für Ihren Hund',
      image: '/articles/nutrition.jpg',
      author: 'Dr. Weber',
      date: '15. Februar 2025',
      excerpt: 'Ein ausführlicher Leitfaden zur gesunden und ausgewogenen Ernährung Ihres Hundes.',
      readTime: '8 Minuten'
    },
    {
      id: 2,
      title: 'Stressfreie Tierarztbesuche',
      image: '/articles/vet-visit.jpg',
      author: 'Lisa Müller',
      date: '1. März 2025',
      excerpt: 'So machen Sie Tierarztbesuche für Ihren Hund zu einer positiven Erfahrung.',
      readTime: '6 Minuten'
    }
  ];

  const faqs = [
    {
      question: 'Wie oft sollte ich meinen Hund impfen lassen?',
      answer: 'Die Impfintervalle hängen von verschiedenen Faktoren ab, wie Alter und Lebensstil des Hundes. Grundsätzlich sind jährliche Auffrischungen empfohlen. Sprechen Sie mit Ihrem Tierarzt über einen individuellen Impfplan.'
    },
    {
      question: 'Wie viel Bewegung braucht mein Hund täglich?',
      answer: 'Der Bewegungsbedarf variiert je nach Rasse, Alter und Gesundheitszustand. Die meisten erwachsenen Hunde benötigen mindestens 1-2 Stunden Bewegung täglich, aufgeteilt in mehrere Spaziergänge.'
    },
    {
      question: 'Was tun bei Verhaltensproblemen?',
      answer: 'Bei Verhaltensproblemen sollten Sie zunächst einen Tierarzt aufsuchen, um medizinische Ursachen auszuschließen. Anschließend kann ein professioneller Hundetrainer helfen, das Problem zu lösen.'
    }
  ];

  return (
    <ResourcesContainer>
      <PageTitle>Hilfreiche Ressourcen</PageTitle>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'guides'} 
          onClick={() => setActiveTab('guides')}
        >
          Ratgeber
        </Tab>
        <Tab 
          active={activeTab === 'articles'} 
          onClick={() => setActiveTab('articles')}
        >
          Artikel
        </Tab>
        <Tab 
          active={activeTab === 'faq'} 
          onClick={() => setActiveTab('faq')}
        >
          Häufige Fragen
        </Tab>
      </TabsContainer>

      <GuidesGrid>
        {guides.map(guide => (
          <GuideCard key={guide.id}>
            <img src={guide.image} alt={guide.title} />
            <div className="guide-content">
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <a href={guide.link} className="read-more">Weiterlesen →</a>
            </div>
          </GuideCard>
        ))}
      </GuidesGrid>

      <ArticlesList>
        {articles.map(article => (
          <ArticleItem key={article.id}>
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3>{article.title}</h3>
              <div className="article-meta">
                <span>{article.author}</span> • <span>{article.date}</span> • <span>{article.readTime} Lesezeit</span>
              </div>
              <p>{article.excerpt}</p>
              <a href={`/resources/articles/${article.id}`} className="read-more">Artikel lesen →</a>
            </div>
          </ArticleItem>
        ))}
      </ArticlesList>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </FAQItem>
        ))}
      </div>
    </ResourcesContainer>
  );
};

export default Resources;
