import styles from './CaseCard.module.css'
import React from "react";
import Image from 'next/image'


export default function CaseCard(props: { title: string; description: string; imgPath: string; }) {
    return (
        <div className={styles.card}>
            <div className={styles.bg}>
                <h2 className={styles.title}>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <Image
                src={props.imgPath}
                width={500}
                height={500}
                alt={props.title}
                className={styles.img}
            />
        </div>
    )
}