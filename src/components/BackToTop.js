'use client'
import styles from './BackToTop.module.css'


export default function BackToTop(){
    const handleClick = ()=>{
        const wrapper = document.querySelector('#main_wrapper');
        wrapper.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return(
        <p className={styles.btt} onClick={handleClick}>Back to top</p>
    )
}