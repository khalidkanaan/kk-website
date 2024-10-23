import React from 'react';
import BasePage from '../components/BasePage';
import Card from '../components/Card';
import experienceData from '../assets/data/expeirenceData';

const ExperiencePage = () => {
  const leftPersons = [experienceData.HealthCanada];
  const rightPerson = [experienceData.Interac, experienceData.CanadaPost];

  const renderCards = (cards) => {
    return cards.map((card, index) => <Card key={index} data={card} />);
  };

  return (
    <BasePage
      leftChildren={<>{renderCards(leftPersons)}</>}
      rightChildren={<>{renderCards(rightPerson)}</>}
    />
  );
};

export default ExperiencePage;
