import React from 'react';
import BasePage from '../components/BasePage';
import Card from '../components/Card';
import projectData from '../assets/data/projectData';

const ProjectsPage = () => {
  const leftCards = [projectData.Cybered, projectData.ManufacturingSimulation, projectData.MusicGenreClassification, projectData.JavaMonopoly];
  const rightCards = [projectData.JiraCSVGenie, projectData.ElevatorControlSystem, projectData.AmazinBookstore, projectData.MSP432LEDControl];

  const renderCards = (cards) => {
    return cards.map((card, index) => <Card key={index} data={card} collapsibleDescription={true}/>);
  };

  return (
    <BasePage
      leftChildren={<>{renderCards(leftCards)}</>}
      rightChildren={<>{renderCards(rightCards)}</>}
    />
  );
};

export default ProjectsPage;
