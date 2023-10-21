'use client'
import { useClientBottom, useScrollPosition } from '@/utils/ScrollContext'
import styles from './GolfBrainSection.module.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

export default function GolfBrainSection(){
    const clientBottom = useClientBottom();
    const scrollPosition = useScrollPosition();
    const containerCoordsRef = useRef();
    const textRef = useRef();
    const imageRef = useRef();
    const ref = useRef();


    useEffect(()=>{
        containerCoordsRef.current = ref.current.getBoundingClientRect();
        if(clientBottom > containerCoordsRef.current.top + (containerCoordsRef.current.height/2)){
            ref.current.classList.add(`fade_in`);
            textRef.current.style.transform = 'translateY(0%)';
            imageRef.current.style.transform = 'translateY(0%)';
        }
    },[scrollPosition])


    return(
        <section 
            className={'bleed ' + styles.container}
            ref={ref}
        >
            <div ref={textRef} className={styles.right_container}>
                <h2 className={'h2_heading' + ' ' + styles.heading}>Unlock Your Golfing Brain</h2>
                <p className={'text ' + styles.description}><strong>From the Novice/Recreational Golfer to the Advanced Player</strong>, Ben’s approach to teaching will, in the end, <strong>Teach You How To Teach Yourself – and UNLOCK your Golfing Brain.</strong>
                {`\n`} From a one yard putt to a full-swing drive you will learn how to <strong>THINK</strong> like a Tour Pro and have the opportunity to reach your fullest potential as a golfer.
                </p>
            </div>
            <Image ref={imageRef} src={'/brain-icon.png'} alt='icon of a brain' className={styles.icon} height={120} width={120}/>
        </section>
    )
}