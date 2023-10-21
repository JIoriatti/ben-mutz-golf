'use client'
import styles from './MethodologySection.module.css'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import { useClientBottom, useScrollPosition } from '@/utils/ScrollContext';
import LearnMore from './LearnMore';

export default function MethodologySection(){

    const scrollPosition = useScrollPosition();
    const ref = useRef();
    const clientBottom = useClientBottom();
    const methodRefs = useRef([]);
    const containerCoordsRef = useRef();


    const createMethodRefs = (ref)=>{
        if(ref && !methodRefs.current.includes(ref))methodRefs.current.push(ref);
    }


    useEffect(()=>{
        containerCoordsRef.current = ref.current.getBoundingClientRect();
        if(clientBottom > containerCoordsRef.current.top + 150){
            // ref.current.classList.add(`fade_in`);
            methodRefs.current.forEach((ref,i)=>{
                ref.style.transform = 'translateY(0%)';
                ref.style.opacity = '1';
                ref.style.transitionDelay = `${i/8}s`
            });
        }
    },[scrollPosition])

    return(
        <section 
            className={'bleed ' + styles.container + ' mobile_no_animate'}
            
            >
            <h2 className={'h2_heading ' + styles.heading}>Full Package Instruction</h2>
            <p className={styles.sub_heading}>Golf instruction that will transform the way you think and play golf.</p>
            <div ref={ref} className={styles.methods_container}>
                <div 
                    className={styles.method_container + ' mobile_no_gradient'}
                    ref={(ref)=> createMethodRefs(ref)}
                >
                    <Image className={styles.icon} src={'/body.png'} alt='stick figure in sitting position' height={50} width={50}/>
                    <h4 className={styles.method_heading}>Body Part to Body Part</h4>
                    <p className={'text ' + styles.method_description}>Ben Mutz created the Body-Part-to-Body-Part technique to take uncertainty out of the game. By having a consistant, measurable, and replicable process, you will be able to play and practice the same way every time.</p>
                    <LearnMore href={'/ultimate-putting-clinic'} text={'ultimate putting clinic'}/>
                </div>
                <div 
                    className={styles.method_container + ' mobile_no_gradient'}
                    ref={(ref)=> createMethodRefs(ref)}
                >
                    <Image className={styles.icon} src={'/weight.png'} alt='stick figure lifting weights' height={50} width={50}/>
                    <h4 className={styles.method_heading}>Weight Transfer</h4>
                    <p className={'text ' + styles.method_description}>The key to the golf swing is weight transfer. Through the Mutz Method you will learn how to distribute your wieght through the golf swing and how the lower body connects to the upper body to create a fluid, effortless swing. </p>
                    <LearnMore href={'/lessons'} text={'lessons'}/>
                </div>
                <div 
                    className={styles.method_container + ' mobile_no_gradient'}
                    ref={(ref)=> createMethodRefs(ref)}
                >
                    <Image className={styles.icon} src={'/ruler.png'} alt={'icon of a ruler'} height={50} width={50}/>
                    <h4 className={styles.method_heading}>Distance Control</h4>
                    <p className={'text ' + styles.method_description}>To become a master putter you must master distance control. Through the Mutz Method and the Body-Part-to-Body-Part technique you will learn to take the guess work out of putting and gain absolute control over every putt.</p>
                    <LearnMore href={'/ultimate-putting-clinic'} text={'putting survey'}/>
                </div>
            </div>
        </section>
    )
}