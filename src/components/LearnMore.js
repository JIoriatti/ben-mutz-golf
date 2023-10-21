import Link from 'next/link'
import styles from './LearnMore.module.css'


export default function LearnMore({href, text}){
    return(
        <Link href={href} className={styles.learn_more}>{text}<span className={styles.arrow}></span></Link>
    )
}