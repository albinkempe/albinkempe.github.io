import styles from './ExperienceBox.module.css'
import React from "react";
import Image from 'next/image'

export default function ExperienceBox(props: { title: string; description: string; from: string; to: string; imgPath: string; }) {
    return (
        <div className={styles.card}>
            <Image
                src={props.imgPath}
                width={500}
                height={500}
                alt={props.title}
                className={styles.img}
            />
            <div className={styles.bg}>
                <h2 className={styles.title}>{props.title}</h2>
                <p>{props.description}</p>
                <p className={styles.dates}>{props.from} - {props.to}</p>
            </div>
        </div>
    )
}