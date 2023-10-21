import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className={styles.wrapper} id='footer'>
            <div className={styles.container}>
                <div className={styles.top_wrapper}>
                    <div className={styles.logo_wrapper}>
                        <a href={'/'}>
                            <Image className={styles.logo} src={'/b-mutz-logo.png'} alt='Ben Mutz Golf Logo' fill></Image>
                        </a>
                    </div>
                    <nav className={styles.nav}>
                        <ul>
                            <li data-div='true'><Link href='/putt-two-par'>Putt Two Par</Link></li>
                            <li data-div='true'><Link href='https://diversey.cpdgolf.com/' target='_blank'>Diversey Driving Range</Link></li>
                            <li><Link href='https://www.thrivsports.com/ben-mutz/' target='_blank'>Book A Lesson</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.bottom_wrapper}>
                    <p className={styles.copyright}><img className={styles.copyright_icon} src="/copyrightLight.png" alt="copyright" height={10} width={10}/>Ben Mutz LLC</p>
                    <p className={styles.attribution}>Site by <a style={{color: 'var(--second)', textDecoration: 'underline', fontSize: '12px'}} href='https://github.com/jioriatti'>JIor</a></p>
                </div>
            </div>
        </footer>
    )
}