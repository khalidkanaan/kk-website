import React, { useState } from 'react';
import styles from '../assets/css/contact.module.css';
import CopyIcon from '../assets/img/copy.svg';
import CopiedIcon from '../assets/img/copied.svg';
import LinkedInIcon from '../assets/img/linkedin.svg';
import GitHubIcon from '../assets/img/github.svg';
import ResumeIcon from '../assets/img/resume.svg';

const EMAIL = "khalid.kanaan.ca@gmail.com";
const PHONE_NUMBER = "6138678218";

const ContactPage = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className={styles.ContactPage}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.description}>Feel free to reach out for any inquiries, collaboration opportunities, or just to say hello!</p>
            
            <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                    <span>Email:</span>
                    <a href={`mailto:${EMAIL}`} className={styles.link}>{EMAIL}</a>
                    <img 
                        onClick={handleCopyEmail}
                        src={copied ? CopiedIcon : CopyIcon} 
                        alt={copied ? "Copied" : "Copy"} 
                        className={styles.copyIcon} 
                    />
                </div>
                <div className={styles.contactItem}>
                    <span>Phone:</span>
                    <a href={`tel:${PHONE_NUMBER}`} className={styles.link}>{PHONE_NUMBER}</a>
                </div>
                <div className={styles.contactItem}>
                    <span>Location:</span>
                    Available to relocate for any position.
                </div>
            </div>

            <h4 className={styles.title}>Links</h4>
            <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/khalid-kanaan-2308b0192/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" className={styles.icon} />
                </a>
                <a href="https://github.com/khalidkanaan" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" className={styles.icon} />
                </a>
                <a href="https://github.com/khalidkanaan/kk-resumes/blob/main/Khalid-Kana'an-Resume-DevOps.pdf" target="_blank" rel="noopener noreferrer">
                    <img src={ResumeIcon} alt="Resume" className={styles.icon} />
                </a>
            </div>
        </section>
    );
};

export default ContactPage;
