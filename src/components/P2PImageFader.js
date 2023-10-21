'use client'

import { useEffect, useRef } from 'react'
import styles from './P2PImageFader.module.css'
import Image from 'next/image'

export default function P2PImageFader({}){
    const imageRefs = useRef([]);

    const createImageRefs = (ref)=>{
        if(ref && !imageRefs.current.includes(ref)){
            imageRefs.current.push(ref);
        }
    }
    useEffect(()=>{
        let interval;
        interval = setInterval(()=>{
            imageRefs.current.forEach((ref)=>{
                ref.classList.toggle(`${styles.current}`);
            })
        },8000)

        return ()=> clearInterval(interval);
    },[])
    return(
        <div className={styles.container}>
            <Image ref={(ref)=> createImageRefs(ref)} className={styles.img + ' ' + styles.current} src={'/b_mutz2.jpg'} alt='Putt Two Par by Ben Mutz' fill></Image>
            <Image ref={(ref)=> createImageRefs(ref)} className={styles.img} src={'/p2pback.jpg'} alt='Putt Two Par Back Side' fill></Image>
        </div>
    )
}