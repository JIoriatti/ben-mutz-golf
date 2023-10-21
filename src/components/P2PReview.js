import Image from 'next/image'
import  styles from './P2PReview.module.css'
import Link from 'next/link'
import P2PReviewBody from './P2PReviewBody'


export default function P2PReview({data}){
    return(
        <article className={styles.container}>
            <Link className={styles.profile_container} href={data.profile.link} target='_blank'>
                    <Image style={{filter: 'invert(100%)'}}src={'/profile-icon.png'} alt='Profile Icon' height={35} width={35}></Image>
                    <p className={styles.username}>{data.profile.name}</p>
            </Link>
            <div className={styles.title_container}>
                <i data-hook="review-star-rating" className={styles.stars}><span className={styles.stars_alt}>5.0 out of 5 stars</span></i>
                <p className={styles.title}>{data.title}</p>
            </div>
            <p className={styles.date}>{data.date.raw}</p>
            {data.verified_purchase && 
                <Link className={styles.verified_purchase} href={'https://www.amazon.com/gp/help/customer/display.html/ref=cm_cr_dp_d_rvw_avp?nodeId=G75XTB7MBMBTXP6W'} target='_blank'>Verified Purchase</Link>
            }
            <P2PReviewBody body={data.body}/>
        </article>
    )
}