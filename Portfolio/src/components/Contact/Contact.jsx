import React from 'react';

import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils';



export const Contact = () => {
    return <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Contact me through this</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:michaelhiu35@gmail.com">Email</a>
            </li>
            <li className={styles.link}>
              
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/michael-hiu-4509bb254/">LinkedIn</a>
            </li>
            <li className={styles.link}>

            
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://github.com/MICH222Pog">GitHub</a>
            </li>
        </ul>
    </footer>
    
};