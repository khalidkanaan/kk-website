import React from 'react';
import BasePage from '../components/BasePage';
import Card from '../components/Card';
import introData from '../assets/data/introData';

const HomePage = () => {
  const leftCards = [introData.Welcome, introData.KhalidInDesert];
  const rightCards = [introData.AboutMe, introData.Links, introData.Tools, introData.KhalidCoding];

  // Helper function to render multiple cards
  const renderCards = (cards) => {
    return cards.map((card, index) => <Card key={index} data={card} />);
  };

  return (
    <BasePage
      leftChildren={<>{renderCards(leftCards)}</>}
      rightChildren={<>{renderCards(rightCards)}</>}
    />
  );
};

export default HomePage;
