import styles from './PuttTwoPar.module.css'
import Link from 'next/link'

export default function PuttTwoPar({footer, homepage}){
    return (
        <Link 
                href={'https://www.amazon.com/Putt-Two-Par-Distance-Control/dp/B0BV1LSZ3M/ref=sr_1_1?crid=2HF7OWCD3FP8A&keywords=ben+mutz+golf&qid=1696518667&sprefix=ben+mutz+golf%2Caps%2C67&sr=8-1'} 
                target='_blank'
                className={styles.book_now_link}
            >
                <button 
                    className={!footer && homepage ? styles.book_now + ' ' + styles.fade_in_book_now : styles.book_now}
                    data-id={footer ? 'footer' : 'main'}                
                >   <p style={{filter: 'drop-shadow(1px 1px 1px var(--darker))'}}>Buy Putt Two Par On Amazon</p>
                    <img className={styles.arrow} src="/arrow.png" alt="arrow" height={15} width={15} />
                </button>
            </Link>
    )
}