'use client'
import styles from './Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {  useScrollPosition } from '@/utils/ScrollContext'
import MobileMenu from './MobileMenu'
import { useEffect, useRef, useState } from 'react'
import DynamicFooter from './DynamicFooter'

import { usePathname } from 'next/navigation'

import ContactButton from './ContactButton'


export default function Naviagtion({}){
    const scrollPosition = useScrollPosition();
    const ref = useRef();
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const path = usePathname();
    const [mediaQuery, setMediaQuery] = useState(false);
    

    useEffect(()=>{
        setPrevScrollPosition(scrollPosition);
        if(scrollPosition > prevScrollPosition && scrollPosition >= window.innerHeight) ref.current.classList.add(`${styles.translate}`)
        else ref.current.classList.remove(`${styles.translate}`)
    },[scrollPosition])

    useEffect(()=>{
        setMediaQuery(window.matchMedia('(max-width: 1350px)').matches)
        const handleMediaQuery = (e)=>{
            setMediaQuery(e.matches);
        }
        window.matchMedia('(max-width: 1350px)').addEventListener('change', handleMediaQuery);

        return ()=> window.matchMedia('(max-width: 1350px)').removeEventListener('change', handleMediaQuery);
    },[])

    useEffect(()=>{
        const mobile_nav = document.querySelector('#mobile_nav');
        const mobile_modal = document.querySelector('#mobile_modal');        
        const main_wrapper = document.querySelector('#main_wrapper');
        main_wrapper.classList.remove('no_scroll');
        mobile_nav.classList.remove('show_mobile_nav');
        mobile_modal.classList.remove('show_mobile_modal');
    },[mediaQuery])

    return (
        <section ref={ref} className={styles.nav_container}>
            <div className={styles.column_wrapper}>

                <div className={styles.top_wrapper}>
                    <div className={styles.logo_wrapper}>
                        <>
                            {path === '/' ?
                                <div className={scrollPosition > 0 ? styles.logo_container + ' ' +  styles.show : styles.logo_container + ' ' + styles.hide}>
                                    <Link href={'/'}>
                                        <Image 
                                            src={'/b-mutz-logo.png'}
                                            alt='Ben Mutz Golf Mini Logo'
                                            height={40}
                                            width={40 * 0.87719298245}
                                            className={styles.sub_logo}
                                        />
                                    </Link>
                                    <Link href={'/'}>
                                        <h2 className={styles.sub_logo_title}>BMG</h2>
                                    </Link>
                                </div>
                                :
                                <a href={'/'} className={styles.logo_container + ' ' +  styles.show}>
                                    <Image 
                                        src={'/b-mutz-logo.png'}
                                        alt='Ben Mutz Golf Mini Logo'
                                        height={40}
                                        width={40 * 0.87719298245}
                                        className={styles.sub_logo}
                                    />
                                    <h2 className={styles.sub_logo_title}>BMG</h2>
                                </a>
                            }
                            
                        </>
                    </div>
                    <nav className={styles.navigation}>
                        <ul className={styles.nav_list}>
                            <Link href={'/putt-two-par'}>
                                <li className={styles.nav_item}>Putt Two Par</li>
                            </Link>
                            <Link href={'/lessons'}>
                                <li className={styles.nav_item}>Lessons</li>
                            </Link>
                            <Link href={'/ultimate-putting-clinic'}>
                                <li className={styles.nav_item}>The Ultimate Putting Clinic</li>
                            </Link>
                            <Link href={'/putting-survey-testimonials'}>
                                <li className={styles.nav_item}>Putting Survey & Testimonials</li>
                            </Link>
                            <Link href={'/about-ben'}>
                                <li className={styles.nav_item}>About Ben</li>
                            </Link>
                        </ul>
                    </nav>
                    {/* <DynamicButtons /> */}
                    {!mediaQuery && 
                        <ContactButton id={'desktop_contact_button'}/>
                    }
                    <MobileMenu/>
                </div>
                {/* {path === '/' && 
                    <DynamicFooter />
                } */}
            </div>
        </section>
    )
}