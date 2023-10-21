'use client'
import styles from './MobileMenu.module.css'



export default function MobileMenu() {
    const handleClick = () => {
        const mobile_nav = document.querySelector('#mobile_nav');
        const mobile_modal = document.querySelector('#mobile_modal');        
        const main_wrapper = document.querySelector('#main_wrapper');
        main_wrapper.classList.toggle('no_scroll');
        mobile_nav.classList.toggle('show_mobile_nav');
        mobile_modal.classList.toggle('show_mobile_modal');
    }
    return (
        <div
            className={styles.container}
            
        >
            <svg onClick={handleClick} className={styles.mobile_menu} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    )
}