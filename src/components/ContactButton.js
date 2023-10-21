'use client'
import styles from './ContactButton.module.css'
import { usePathname } from 'next/navigation';


export default function ContactButton({id, handleClick}){

    const path = usePathname();

    const handleContactClick = (e)=>{
        if(path !== '/'){
            window.location = '/#contact-form';
            return;
        }
        const contactForm = document.querySelector('#contact-form');
        contactForm.scrollIntoView({
            behavior: 'smooth', block: 'end'
        });
        if(e.target.id === 'mobile_contact_button'){
            handleClick();
        }
    }

    return(
        <button id={id} onClick={handleContactClick} className={styles.contact_btn}>Contact</button>
    )
}