'use client'

import styles from './AmazonReviews.module.css'
import reviewData from '../../lib/puttTwoParData.json'
import P2PReview from '@/components/P2PReview'
import { useState, useRef } from 'react'
import Image from 'next/image'


export default function AmazonReviews(){
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef();
    const iconRef = useRef();


    const handleClick = ()=>{
        setIsExpanded(!isExpanded);
        ref.current.classList.toggle(`${styles.expanded}`)
        iconRef.current.classList.toggle(`${styles.flip}`)
    }

    return(
        <section ref={ref}  className={styles.container + ' mobile_no_gradient'}> 
            <div className={styles.header_wrapper} onClick={handleClick}>
                <Image ref={iconRef} style={{pointerEvents: 'none'}} onClick={handleClick} src={'/arrow.png'} alt='Arrow Icon' height={30} width={30} className={styles.icon}></Image>
                <p className={styles.header}>Amazon reviews</p>
            </div>
            {isExpanded && 
                <div className={styles.wrapper} id='wrapper'>
                    {reviewData.product.top_reviews.slice(0,7).map((review,i)=>{
                        return(
                            <P2PReview key={i} data={review}/>
                        )
                    })}
                </div>
            }
        </section>
    )
}