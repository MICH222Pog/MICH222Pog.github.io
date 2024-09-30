import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css";


export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } 
}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <li className={styles.skill} key={id}>{skill}</li>;
                    })
                }
            </ul>
            <div className={styles.links}>
                <a href={source} className={styles.link} alt="link2">View on GitHub</a>
            </div>
        </div>
    );
};
