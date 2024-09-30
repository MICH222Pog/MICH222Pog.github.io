import React from 'react';

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';


export const Hero = () => {
    return <section id='hero' className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, i'm Michael
            </h1>
            <p className={styles.description}>
            I'm a Computer Science student at Binus University, with a interest for technology and innovation. I am passionate about software development and programming, constantly improving my skills and applying them to create efficient and effective solutions. Driven by a desire for growth and innovation, I am excited to take on challenges that allow me to increase my skills even more.
            </p>
            <a className={styles.contactBtn} href="mailto:michaelhiu35@gmail.com">Contact me</a>
        </div>
        <img src={getImageUrl("hero/Photo.png")} alt='Hero image of me' className={styles.heroImg} />
        <div className={styles.topBlur} />
    </section>
    
};