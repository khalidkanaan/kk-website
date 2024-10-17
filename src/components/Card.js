import React from 'react';
import styles from '../assets/css/card.module.css';

const Card = ({ data }) => {
  const { title, subtitle, description, image, imageAlt, links } = data;

  return (
    <div className={styles.card}>
      {image && (
        <>
          <img src={image} alt={imageAlt || 'cardImg'} className={styles.cardImage} />
          <hr />
        </>
      )}
      {title && (
        <>
          <h5 className={styles.cardTitle}>{title}</h5>
          <hr />
        </>
      )}
      {subtitle && (
        <>
          <p className={styles.cardSubtitle}>{subtitle}</p>
          <hr />
        </>
      )}
      {description && (
        <>
          {Array.isArray(description) ? (
            description.map((desc, index) => (
              <p key={index} className={styles.cardDescription}>{desc}</p>
            ))
          ) : (
            <p className={styles.cardDescription}>{description}</p>
          )}
          <hr />
        </>
      )}
      {links && links.length > 0 && (
        <div className={styles.cardLinks}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={styles.cardButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label || 'Click here'}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
