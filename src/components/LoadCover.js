'use client'
import styles from './LoadCover.module.css'
import { useRef, useState } from 'react'

export default function LoadCover({}){
    const ref = useRef();
    const handleAnimationEnd = (e)=>{
        const wrapper = document.querySelector('#main_wrapper');
        ref.current.style.display = 'none'
        wrapper.classList.add('loaded');
    }
    
    return(            
        <div ref={ref} onAnimationEnd={handleAnimationEnd} className={styles.container}>
            <span className={styles.logo}>BMG</span>
        </div>
    )
}