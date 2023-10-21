'use client'
import styles from './GolfBall.module.css'
import { useScrollPosition } from '@/utils/ScrollContext'


export default function GolfBall(){
    const scrollPosition = useScrollPosition();

    return(
        <div 
            className={styles.container}
            style={{
                transform: `translate3d(${Math.floor(scrollPosition)}px, ${Math.floor(scrollPosition/4)}px, 0) rotate(${Math.floor(scrollPosition / 4)}deg) scale(calc(1 + ${scrollPosition/100}))`
            }}
        ></div>
    )
}