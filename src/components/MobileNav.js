'use client'
import styles from './MobileNav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ContactButton from './ContactButton'
import { useEffect } from 'react'


export default function MobileNav(){

    const handleClick = () => {
        const mobile_nav = document.querySelector('#mobile_nav');
        const mobile_modal = document.querySelector('#mobile_modal');        
        const main_wrapper = document.querySelector('#main_wrapper');
        main_wrapper.classList.toggle('no_scroll');
        mobile_nav.classList.toggle('show_mobile_nav');
        mobile_modal.classList.toggle('show_mobile_modal');
    }

    return(
        <>
        
    <div id='mobile_modal' onClick={handleClick} className={styles.modal}></div>
            <nav id='mobile_nav' className={styles.mobile_nav}>
                <svg className={styles.exit} onClick={handleClick} fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 490 490" xmlSpace="preserve">
                    <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "/>
                </svg>
                    <ul>
                        <Link href={'/putt-two-par'} onClick={handleClick}>
                            <li>Putt Two Par</li>
                        </Link>
                        <Link href={'/lessons'} onClick={handleClick}>
                            <li>Lessons</li>
                        </Link>
                        <Link href={'/ultimate-putting-clinic'} onClick={handleClick}>
                            <li>The Ultimate Putting Clinic</li>
                        </Link>
                        <Link href={'/putting-survey-testimonials'} onClick={handleClick}>
                            <li>Putting Survey & Testimonials</li>

                        </Link>
                        <Link href={'/about-ben'} onClick={handleClick}>
                            <li>About Ben</li>
                        </Link>
                    </ul>
                    <ContactButton id={'mobile_contact_button'} handleClick={handleClick}/>
                    <a href={'/'} onClick={handleClick}>
                        <Image className={styles.logo} src={'/b-mutz-logo.png'} alt='Ben Mutz Golf Logo' height={154} width={135}></Image>
                    </a>
                    
                </nav>
        </>
    )
}