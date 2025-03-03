import React, { useState } from 'react';
import styled from 'styled-components';

const AdoptionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 40px;
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

const FiltersContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const FilterGroup = styled.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: var(--text-color);
    font-size: 0.95rem;
  }
  
  select, input {
    width: 100%;
    padding: 12px;
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  
  button {
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
    margin-left: 15px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    
    &.filter {
      background-color: var(--primary-color);
      color: white;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
    
    &.reset {
      background-color: white;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      
      &:hover {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }
`;

const DogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

const DogCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .dog-image {
    height: 220px;
    width: 100%;
    object-fit: cover;
  }
  
  .dog-info {
    padding: 25px;
  }
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 8px;
    color: var(--text-color);
  }
  
  .dog-meta {
    color: #777;
    font-size: 0.9rem;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 5px;
      color: var(--primary-color);
    }
  }
  
  .dog-personality {
    margin-bottom: 20px;
    line-height: 1.6;
    font-size: 0.95rem;
    color: var(--text-color);
  }
  
  .dog-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
    
    span {
      background-color: rgba(147, 112, 255, 0.1);
      color: var(--primary-color);
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
  
  button {
    width: 100%;
    padding: 14px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    
    &:hover {
      background-color: darken(var(--primary-color), 10%);
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
  
  button {
    padding: 10px 15px;
    margin: 0 5px;
    border: none;
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    
    &:hover:not(:disabled) {
      background-color: rgba(147, 112, 255, 0.1);
      color: var(--primary-color);
    }
    
    &.active {
      background-color: var(--primary-color);
      color: white;
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const AdoptionProcess = styled.section`
  margin-top: 80px;
  margin-bottom: 60px;
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ProcessTitle = styled.h2`
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

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 20px;
  
  .step-number {
    width: 60px;
    height: 60px;
    background-color: var(--secondary-color);
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }
  
  p {
    color: var(--text-color);
    line-height: 1.6;
  }
`;

// Sample data
const dogsList = [
  {
    id: 1,
    name: 'Max',
    age: '3 Jahre',
    breed: 'Golden Retriever',
    gender: 'Rüde',
    size: 'Groß',
    personality: 'Freundlich und energiegeladen, liebt es zu spielen und lange Spaziergänge zu machen.',
    healthStatus: 'Gesund, geimpft, kastriert',
    specialNeeds: false,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=662&q=80',
    tags: ['Kinderfreundlich', 'Stubenrein', 'Verträglich']
  },
  {
    id: 2,
    name: 'Luna',
    age: '5 Jahre',
    breed: 'Labrador Mix',
    gender: 'Hündin',
    size: 'Mittelgroß',
    personality: 'Ruhig und liebevoll, genießt es zu kuscheln und kurze Spaziergänge zu machen.',
    healthStatus: 'Gesund, geimpft, sterilisiert',
    specialNeeds: false,
    image: 'https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    tags: ['Katzenfreundlich', 'Stubenrein', 'Seniorenfreundlich']
  },
  {
    id: 3,
    name: 'Rocky',
    age: '1 Jahr',
    breed: 'Pitbull Mix',
    gender: 'Rüde',
    size: 'Mittelgroß',
    personality: 'Spielerisch und neugierig, noch in der Ausbildung, aber sehr lernfähig.',
    healthStatus: 'Gesund, geimpft, kastriert',
    specialNeeds: false,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    tags: ['Hochenergetisch', 'Benötigt Training', 'Verträglich']
  },
  {
    id: 4,
    name: 'Daisy',
    age: '7 Jahre',
    breed: 'Beagle',
    gender: 'Hündin',
    size: 'Klein',
    personality: 'Süß und sanft, liebt es zu sonnenbaden und auf Schnüffelspaziergängen zu gehen.',
    healthStatus: 'Gesund, geimpft, sterilisiert',
    specialNeeds: true,
    image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    tags: ['Spezielle Bedürfnisse', 'Kinderfreundlich', 'Stubenrein']
  },
  {
    id: 5,
    name: 'Charlie',
    age: '2 Jahre',
    breed: 'Border Collie',
    gender: 'Rüde',
    size: 'Mittelgroß',
    personality: 'Intelligent und aktiv, benötigt geistige und körperliche Anregung.',
    healthStatus: 'Gesund, geimpft, kastriert',
    specialNeeds: false,
    image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80',
    tags: ['Hochenergetisch', 'Sehr intelligent', 'Benötigt erfahrene Besitzer']
  },
  {
    id: 6,
    name: 'Bella',
    age: '4 Jahre',
    breed: 'Dachshund',
    gender: 'Hündin',
    size: 'Klein',
    personality: 'Neugierig und mutig, liebt es unter Decken zu buddeln.',
    healthStatus: 'Gesund, geimpft, sterilisiert',
    specialNeeds: false,
    image: 'https://images.unsplash.com/photo-1631897276150-96234c119761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    tags: ['Katzenfreundlich', 'Stubenrein', 'Wohnungstauglich']
  }
];

const adoptionSteps = [
  {
    id: 1,
    title: 'Hunde durchstöbern',
    description: 'Sehen Sie sich unsere verfügbaren Hunde an und finden Sie einen passenden Begleiter für Ihren Lebensstil.'
  },
  {
    id: 2,
    title: 'Anfrage stellen',
    description: 'Füllen Sie unser Anfrageformular aus, damit wir Sie und Ihre Situation besser kennenlernen können.'
  },
  {
    id: 3,
    title: 'Kennenlernen',
    description: 'Besuchen Sie uns und lernen Sie Ihren ausgewählten Hund in entspannter Atmosphäre kennen.'
  },
  {
    id: 4,
    title: 'Hausbesuch',
    description: 'Wir besuchen Sie zu Hause, um sicherzustellen, dass alles für Ihren neuen Freund vorbereitet ist.'
  }
];

const Adoption = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 6;
  
  // Calculate current dogs to display
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogsList.slice(indexOfFirstDog, indexOfLastDog);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <AdoptionContainer>
      <PageTitle>Finden Sie Ihren perfekten Begleiter</PageTitle>
      
      <FiltersContainer>
        <FilterGrid>
          <FilterGroup>
            <label>Rasse</label>
            <select>
              <option value="">Alle Rassen</option>
              <option value="labrador">Labrador</option>
              <option value="german-shepherd">Deutscher Schäferhund</option>
              <option value="beagle">Beagle</option>
              <option value="poodle">Pudel</option>
              <option value="mixed">Mischling</option>
            </select>
          </FilterGroup>
          
          <FilterGroup>
            <label>Alter</label>
            <select>
              <option value="">Jedes Alter</option>
              <option value="puppy">Welpe (bis 1 Jahr)</option>
              <option value="young">Jung (1-3 Jahre)</option>
              <option value="adult">Erwachsen (3-7 Jahre)</option>
              <option value="senior">Senior (7+ Jahre)</option>
            </select>
          </FilterGroup>
          
          <FilterGroup>
            <label>Größe</label>
            <select>
              <option value="">Jede Größe</option>
              <option value="small">Klein (bis 10kg)</option>
              <option value="medium">Mittelgroß (10-25kg)</option>
              <option value="large">Groß (über 25kg)</option>
            </select>
          </FilterGroup>
          
          <FilterGroup>
            <label>Geschlecht</label>
            <select>
              <option value="">Jedes Geschlecht</option>
              <option value="male">Rüde</option>
              <option value="female">Hündin</option>
            </select>
          </FilterGroup>
        </FilterGrid>
        
        <FilterButtons>
          <button className="reset">Filter zurücksetzen</button>
          <button className="filter">Filter anwenden</button>
        </FilterButtons>
      </FiltersContainer>
      
      <DogsGrid>
        {currentDogs.map(dog => (
          <DogCard key={dog.id}>
            <img src={dog.image} alt={dog.name} className="dog-image" />
            <div className="dog-info">
              <h3>{dog.name}</h3>
              <div className="dog-meta">
                {dog.breed} • {dog.age} • {dog.gender}
              </div>
              <p className="dog-personality">{dog.personality}</p>
              <div className="dog-tags">
                {dog.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <button>Mehr über {dog.name} erfahren</button>
            </div>
          </DogCard>
        ))}
      </DogsGrid>
      
      <Pagination>
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Vorherige Seite
        </button>
        
        {Array.from({ length: Math.ceil(dogsList.length / dogsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        
        <button
          disabled={currentPage === Math.ceil(dogsList.length / dogsPerPage)}
          onClick={() => paginate(currentPage + 1)}
        >
          Nächste Seite
        </button>
      </Pagination>
      
      <AdoptionProcess>
        <ProcessTitle>Der Adoptionsprozess</ProcessTitle>
        <ProcessSteps>
          {adoptionSteps.map(step => (
            <ProcessStep key={step.id}>
              <div className="step-number">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </AdoptionProcess>
    </AdoptionContainer>
  );
};

export default Adoption;
