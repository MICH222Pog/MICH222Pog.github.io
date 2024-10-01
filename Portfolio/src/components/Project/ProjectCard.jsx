import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, demo, source } }) => {
    return (
        <div className={styles.card}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.links}>
                <a href={source} className={styles.link}>View On GitHub</a>
            </div>
        </div>
    );
};
