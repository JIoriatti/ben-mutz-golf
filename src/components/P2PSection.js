'use client'
import Image from 'next/image'
import styles from './P2PSection.module.css'
import { useEffect, useRef } from 'react'
import { useClientBottom, useScrollPosition } from '@/utils/ScrollContext';
import Link from 'next/link';
import LearnMore from './LearnMore';
import PuttTwoPar from './PuttTwoPar';



export default function P2PSection(){
    const imageRef = useRef();
    const textRef = useRef();
    const containerRef = useRef();
    const containerCoordsRef = useRef();
    const scrollPosition = useScrollPosition();
    const clientBottom = useClientBottom();

    useEffect(()=>{
        containerCoordsRef.current = containerRef.current.getBoundingClientRect();
        if(clientBottom > containerCoordsRef.current.top + 150){
            imageRef.current.style.transform = 'translateY(0%)';
            textRef.current.style.transform = 'translateY(0%)';
            imageRef.current.style.opacity = '1';
            textRef.current.style.opacity = '1';
        }
    },[scrollPosition])

    return(
        <section ref={containerRef} className={styles.container + ' mobile_no_animate'}>
            <div className={styles.wrapper}>
                <div ref={textRef} className={styles.left_container}>
                    <h2 className={styles.header}>Putt Two Par:</h2>
                    <p className={styles.sub_header}>How To Master Distance Control When Putting</p>
                    <p className={styles.description}>Putt Two Par is the first in a series of four books that will cover Ben’s entire FOUNDATIONAL Method of Golf Instruction.
    Ben’s Method Teaches Students How to Teach Themselves with the #1 Goal of UNLOCKING Their Golfing Brain!</p>
                    <LearnMore href={'/putt-two-par'} text={'view details'}/>
                    {/* <PuttTwoPar /> */}
                </div>
                <div ref={imageRef} className={styles.img_wrapper}>
                    <Image  className={styles.img} src={'/b_mutz2.jpg'} alt='Ben Mutz' fill></Image>
                </div>
            </div>
        </section>
    )
}