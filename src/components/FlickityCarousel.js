'use client'

import { useClientBottom, useScrollPosition } from '@/utils/ScrollContext'
import styles from './FlickityCarousel.module.css'
import { useEffect, useRef } from 'react';



const TESTIMONIALS = [
    {
        comment: 'Great instructor and great classes. The courses were perfect as a beginner with little knowledge on golf. Ben has an expertise and teaching method that made it engaging and more educational than any online instruction I had tried before. After 5 weeks I already felt comfortable and ready to actually golf with friends. Highly recommend any courses or lessons he offers.',
        user: 'Caden F',
        date: 'August 20, 2023'
    },
    {
        comment: `We engaged Ben to teach a group of ~30 employees at our Bank as a part of a DEI / internal networking initiative. Ben was great to work with providing our group instruction, encouragement, and helpful takeaways to continue learning. Ben did a nice job catering to our group with a range of experience. All participants from those brand new to the game and others with years of experience walked away having learned something and improving their game.
        Looking forward to future lessons with Ben!`,
        user: 'Kathleen C',
        date: 'August 22, 2023'
    },
    {
        comment: 'I have worked with a couple of different golf coaches in Chicago and Ben is by far the best. He teaches the game in an approachable, organized, and intuitive manner. His experience and knowledge of the game allows him to coach players of all different skill levels. In addition to his teaching abilities, Ben makes the lessons enjoyable through his storytelling and great sense of humor.',
        user: 'Ryan M',
        date: 'August 24, 2023'
    },
    {
       comment: `Ben was fantastic teacher for the first time golfer. he gave me great beginning lessons and cannot thank him enough. I will be booking again with Ben

       He is just a great person too.` ,
       user: 'Dan D',
       date: 'August 27, 2023'
    },
    {
        comment: `I am so grateful I connected with Ben and can’t say enough good things about him. He is an amazing teacher with a step by step approach; I leave every lesson with a much improved swing and more confidence. I learned to use my lower body and weight transfer and can now hold my own on the course. I took his two hour putting clinic; with “back and through” and his distance method, my short game improved dramatically. He sends videos and homework to help between lessons. The best part is the Ben is kind, engaging and truly invested in helping you love golf.`,
        user: 'Karen J',
        date: 'August 28, 2023'
    },
    {
        comment: `I connected with Ben as a complete beginner and after only a couple of lessons Ben has given me the confidence I needed to get out and play 18 holes with friends much more experienced than I am. Ben is a fantastic instructor with a proven method that he applies during our sessions to help me improve my game. Also, he is kind and easy to work with. Overall, I recommend working with Ben for any golfer that is trying to improve and I genuinely am looking forward to more lessons with Ben soon!`,
        user: 'Eric O',
        date: 'August 29, 2023'
    },
    {
        comment: `I came in as an 8 HCP and have lowered it by a stroke, just two rounds after my short game lesson with Ben Putz. His teachings are easy to understand, and I am the most confident I have ever been on the green. Book the lesson. Read his book. Put in the work. Lower your score.`,
        user: 'Charles G',
        date: 'September 3, 2023'
    },
    {
        comment: `Ben is a terrific pro. I’m basically a total beginner. Have always enjoyed the game but been too embarrassed of my poor shots to play much with my friends. In a single lesson, Ben introduced me to a few of his simple methods that I can implement on every shot. He fixed my address, my stance, my movement, my focus and most importantly, my contact with the ball. Ben is the real deal, and his coaching is some of best money I’ve ever spent on golf.`,
        user: 'Adam F',
        date: 'September 15, 2023'
    }
]

export default function FlickityCarousel(){
    const scrollPosition = useScrollPosition();
    const clientBottom = useClientBottom();
    const ref = useRef();
    useEffect(()=>{
        const coords = ref.current.getBoundingClientRect();
        if(clientBottom > coords.top + 150){
            ref.current.style.opacity = '1';
        }
    },[scrollPosition])

    return(
        <section ref={ref} className='main-carousel flickity-enabled is-draggable' data-flickity="{ &quot;cellAlign&quot;: &quot;center&quot;, &quot;contain&quot;: true, &quot;prevNextButtons&quot;: false, &quot;wrapAround&quot;: true, &quot;accessibility&quot;: true, &quot;pageDots&quot; : true, &quot;fullscreen&quot; : false, &quot;adaptiveHeight&quot; : false, &quot;groupCells&quot; : &quot;60%&quot; }">
            {TESTIMONIALS.map((testimonial,i)=>{
                return (
                    <article key={i} className={'carousel-cell mobile_no_gradient ' + styles.review}>
                        <p className={'text ' + styles.comment}>{testimonial.comment}</p>
                        <div className={styles.bottom_container}>
                            <div className={styles.stars_container}>
                                {[...Array(5)].fill(1).map((star,j)=>{
                                    return(
                                        <svg key={j} className={styles.star} fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star-filled</title> <path d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.124-0.276-0.396-0.464-0.713-0.464s-0.589 0.189-0.711 0.459l-0.002 0.005-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.070-0.037 0.15-0.037 0.233 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.054 0.442-0.144l-0.002 0.001 8.008-5.818 8.006 5.818c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005z"></path> </g></svg>
                                    )
                                })}
                            </div>
                            <p className={styles.user_date}>{testimonial.user} - {testimonial.date}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}