import styles from './BookNow.module.css'
import Link from 'next/link'

export default function BookNow({footer}){
    return (
        <Link 
                href={'https://www.thrivsports.com/ben-mutz/'} 
                target='_blank'
                className={styles.book_now_link}
            >
                <button 
                    className={!footer ? styles.book_now + ' ' + styles.fade_in_book_now : styles.book_now}
                    data-id={footer ? 'footer' : 'main'}                
                >
                    <p style={{filter: 'drop-shadow(1px 1px 1px var(--darker))'}}>Book a lesson</p>
                    <img className={styles.arrow} src="/arrow.png" alt="arrow" height={15} width={15} />
                </button>
            </Link>
    )
}