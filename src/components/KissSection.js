'use client'
import { useClientBottom, useScrollPosition } from '@/utils/ScrollContext'
import styles from './KissSection.module.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function KissSection(){
    const scrollPosition = useScrollPosition();
    const ref = useRef();
    const leftTextRef = useRef();
    const leftImageRef = useRef();
    const rightTextRef = useRef();
    const rightImageRef = useRef();


    const leftRef = useRef();
    const rightRef = useRef();
    
    const clientBottom = useClientBottom();
    const containerCoordsRef = useRef();

    useEffect(()=>{
        containerCoordsRef.current = ref.current.getBoundingClientRect();
        const LIC = leftImageRef.current.getBoundingClientRect();
        const RIC = rightImageRef.current.getBoundingClientRect();
        if(clientBottom > LIC.top + 150){
            
            leftImageRef.current.classList.add(`${styles.fade_in}`);
            rightTextRef.current.classList.add(`${styles.fade_in_late}`);
            // leftRef.current.classList.add(`${styles.fade_in}`);
            // rightRef.current.classList.add(`${styles.fade_in_late}`);
        }
        if(clientBottom > RIC.top + 150){
            rightImageRef.current.classList.add(`${styles.fade_in}`);
            leftTextRef.current.classList.add(`${styles.fade_in_late}`);
        }
    },[scrollPosition])

    return (
        
            <section 
                className={styles.container + ' mobile_no_animate'}
                ref={ref}
            >
                <div className={styles.wrapper}>
                    <div ref={rightRef} className={styles.right_container}>
                        <div ref={rightImageRef} className={styles.img_wrapper} data-r>
                            <Image src={'/b_mutz_9.jpeg'} alt='Ben Mutz Swinging a golf club.' fill className={styles.img} ></Image>
                        </div>
                        <div ref={rightTextRef} className={styles.wrap}>
                            <h2 className={'h2_heading'}> Unlock Your Golfing Brain <span className={styles.brain}></span></h2>
                            <p className={'text ' + styles.description}><strong>From the Novice/Recreational Golfer to the Advanced Player</strong>, Ben’s approach to teaching will, in the end, <strong>Teach You How To Teach Yourself – and UNLOCK your Golfing Brain.</strong>
                                {`\n`} From a one yard putt to a full-swing drive you will learn how to <strong>THINK</strong> like a Tour Pro and have the opportunity to reach your fullest potential as a golfer.
                            </p>
                        </div>
                    </div>
                    <div ref={leftRef} className={styles.left_container}>
                        <div ref={leftTextRef} className={styles.wrap}>
                            <h2 className={'h2_heading'} ><span className={styles.icon}></span>Keep It Simple </h2>
                            <p className={'text '}><strong>This is golf instruction kept simple.</strong> By applying <strong>The K.I.S.S. Theory of Golf Learning</strong>, Ben is able to keep his methodolgy simple and measurable which takes the complexity and guess work out of the game - allowing you to have confidence in every stroke. </p>
                        </div>
                        <div ref={leftImageRef} className={styles.img_wrapper}>
                            <Image src={'/b_mutz_11.jpeg'} alt='Ben Mutz Swinging a golf club.' fill className={styles.img}></Image>
                        </div>
                    </div>
                </div>
                {/* <Image ref={imageRef} className={styles.icon} src={'/lightbulb.png'} alt={`icon of a lightbulb in a person's head.`} height={120} width={120}/> */}
            </section>
        
    )
}