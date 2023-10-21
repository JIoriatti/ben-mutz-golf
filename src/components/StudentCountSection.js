'use client'
import { useClientBottom, useScrollPosition } from '@/utils/ScrollContext'
import styles from './StudentCountSection.module.css'
import { useEffect, useState, useRef } from 'react';


export default function StudentCountSection(){
    const scrollPosition = useScrollPosition();
    const [start, setStart] = useState(false);
    const [studentCount, setStudentCount] = useState(2850);
    const ref = useRef();
    const plusRef = useRef();
    const clientBottom = useClientBottom();
    const containerCoordsRef = useRef();
    const [mediaMatches, setMediaMatches] = useState(false);

    useEffect(()=>{
        containerCoordsRef.current = ref.current.getBoundingClientRect();
        if(clientBottom > containerCoordsRef.current.top + (containerCoordsRef.current.height/4)){
            setStart(true);
        }
    },[scrollPosition])

    useEffect(()=>{
        let countUpInterval;
        let time = 0.5;
        let count = studentCount;
        let increment = 0.2;
        if(start){
            (function loop(){
                countUpInterval = setTimeout(()=>{
                    count++;
                    setStudentCount(count);
                    increment*=1.005;
                    time+=increment;
                    if(count === 3000){
                        plusRef.current.classList.remove(`${styles.plus_animate}`)
                        return
                    };
                    loop();
                },time);
            })();
        }
        return ()=> clearInterval(countUpInterval);
    },[start])

    useEffect(()=>{
        setMediaMatches(window.matchMedia('(max-width: 768px)').matches);
    },[])


    if(mediaMatches){
        return (
            <section 
                className={'bleed ' + styles.container} 
            >
                <div className={styles.count_wrapper}>
                    <h2 ref={ref} className={'h2_heading ' + styles.center + ' ' + styles.count}>
                        3000 
                        <span ref={plusRef} className={styles.count + ' ' + styles.plus}>+</span> 
                    </h2>
                </div>
                <h3 className={styles.sub_heading}>Students Taught And Counting!</h3>
            </section>
        )
        
    }
    else{
        return (
            <section 
                className={'bleed ' + styles.container} 
            >
                <div className={styles.count_wrapper}>
                    <h2 ref={ref} className={'h2_heading ' + styles.center + ' ' + styles.count}>
                        {studentCount} 
                    </h2>
                    <span ref={plusRef} className={start ? styles.count + ' ' + styles.plus_animate + ' ' + styles.plus: styles.count + ' ' + styles.plus}>+</span> 
                </div>
                <h3 className={styles.sub_heading}>Students Taught And Counting!</h3>
            </section>
        )
    }
}