'use client'
import styles from './Header.module.css'
import Image from 'next/image'
import { useScrollPosition } from '@/utils/ScrollContext'
import Naviagtion from './Navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

export default function Header({}){
    const scrollPosition = useScrollPosition();
    const path = usePathname();
    const ref = useRef();
    return (
            <header 
                className={path === '/' ? styles.container : styles.container + ' ' + styles.sticky}
                style={{
                    transform: scrollPosition > 0 ? `translateY(-${ref.current?.clientHeight}px)` : 'translateY(0px)'
                }}
            >
                <div 
                    className={'bleed ' + styles.title_wrapper}
                    ref={ref}
                >
                    <Link
                        href={'/'}
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        className={styles.title_link}
                    >
                        <Image 
                            src={'/b-mutz-logo.png'}
                            alt='Ben Mutz Golf Logo'
                            className={styles.logo}
                            width={50*0.87719298245}
                            height={50}
                        />
                        <div className={styles.title_container}>
                            <h1 className={styles.title}>Ben Mutz Golf</h1>
                            <h2 className={styles.sub_title}>Golf Professional, Instructor, and Author.</h2>
                        </div>
                    </Link>
                </div>
                {path !== '/' &&
                    <Naviagtion/>
                }
            </header>
       
    )
}