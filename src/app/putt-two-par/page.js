
import styles from './page.module.css'

import PuttTwoPar from '@/components/PuttTwoPar'
import P2PImageFader from '@/components/P2PImageFader'
import AmazonReviews from '@/components/AmazonReviews'
import BackToTop from '@/components/BackToTop'

export default async function PuttTwoParPage() {

    return (
        <>
        
            <main className={styles.main}>
                <h1 className={styles.header + ' h2_heading'}>Putt Two Par: How To Master Distance Control When Putting</h1>
                <div className={styles.top_wrapper}>
                    <section className={styles.left_container + ' mobile_no_gradient'}>

                        <h2 className={styles.sub_header}>Do You Struggle with Distance Control When Putting?
                            Are You Tired of 3 Putting?</h2>
                        <p className={styles.hook + ' text'}> McDonald’s Founder Ray Kroc was asked what it felt like to be an Overnight Success. His answer was profound: “I was an Overnight Success all right, but 30 Years is a long, long night.”
                            My Long, Long Night is 37 years in the making, but this is a Simple Decision for YOURSELF.
                            Purchase this book, and if by chance you don’t like to read, go Directly to the 5 Drills that were designed and created around my Method and YOU WILL Lower Your Putting Stroke Average.
                            The putting subjects covered in this book are Distance Control (The first step towards becoming a Master Putter), Grip & Alignment, Ball Position, my Body-Part to Body-Part Technique (designed to develop a smooth physical putting stroke), and a complete INNOVATIVE, Simplified, Revision on how to Read Greens based on my Putting Method.
                            From a Pure Beginner/Novice Golfer to the Tour Pro Putt Two Par will Teach YOU -HOW TO TEACH YOURSELF- and UNLOCK your Golfing Brain.</p>
                        <PuttTwoPar homepage={false}/>
                    </section>
                    <P2PImageFader />
                </div>
                <AmazonReviews />
                <BackToTop />
            </main>
        </>
    )
}