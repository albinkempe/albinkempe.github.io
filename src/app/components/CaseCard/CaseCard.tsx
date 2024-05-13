import styles from './CaseCard.module.css'
import React from "react";
import Image from 'next/image'


export default function CaseCard(props: { title: string; description: string; imgPath: string; link?: string; keywords: string[];}) {
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
                <p className={styles.title}>{props.title}</p>
                <div className={styles.keywords}>
                    {props.keywords.map((keyword) => (
                    <p key={keyword}>{keyword}</p>
                    ))}
                </div>
                <p>{props.description}</p>
                <br></br>
                {props.link && (
                    <a className={styles.link} href={props.link} target="_blank" rel="noopener noreferrer">Learn more</a>
                )}
            </div>
        </div>
    )
}