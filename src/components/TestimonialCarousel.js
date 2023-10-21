'use client'
import {useRef, useState, useEffect } from 'react';
import styles from './TestimonialCarousel.module.css'
import Image from 'next/image';
import TestimonialTickers from './TestimonialTickers';
import { useClientBottom, useScrollPosition } from '@/utils/ScrollContext';

// const TESTIMONIALS = [
//     {
//         comment: 'Great instructor and great classes. The courses were perfect as a beginner with little knowledge on golf. Ben has an expertise and teaching method that made it engaging and more educational than any online instruction I had tried before. After 5 weeks I already felt comfortable and ready to actually golf with friends. Highly recommend any courses or lessons he offers.',
//         user: 'Caden F',
//         date: 'August 20, 2023'
//     },
//     {
//         comment: `We engaged Ben to teach a group of ~30 employees at our Bank as a part of a DEI / internal networking initiative. Ben was great to work with providing our group instruction, encouragement, and helpful takeaways to continue learning. Ben did a nice job catering to our group with a range of experience. All participants from those brand new to the game and others with years of experience walked away having learned something and improving their game.
//         Looking forward to future lessons with Ben!`,
//         user: 'Kathleen C',
//         date: 'August 22, 2023'
//     },
//     {
//         comment: 'I have worked with a couple of different golf coaches in Chicago and Ben is by far the best. He teaches the game in an approachable, organized, and intuitive manner. His experience and knowledge of the game allows him to coach players of all different skill levels. In addition to his teaching abilities, Ben makes the lessons enjoyable through his storytelling and great sense of humor.',
//         user: 'Ryan M',
//         date: 'August 24, 2023'
//     },
//     {
//        comment: `Ben was fantastic teacher for the first time golfer. he gave me great beginning lessons and cannot thank him enough. I will be booking again with Ben

//        He is just a great person too.` ,
//        user: 'Dan D',
//        date: 'August 27, 2023'
//     },
//     {
//         comment: `I am so grateful I connected with Ben and can’t say enough good things about him. He is an amazing teacher with a step by step approach; I leave every lesson with a much improved swing and more confidence. I learned to use my lower body and weight transfer and can now hold my own on the course. I took his two hour putting clinic; with “back and through” and his distance method, my short game improved dramatically. He sends videos and homework to help between lessons. The best part is the Ben is kind, engaging and truly invested in helping you love golf.`,
//         user: 'Karen J',
//         date: 'August 28, 2023'
//     },
//     {
//         comment: `I connected with Ben as a complete beginner and after only a couple of lessons Ben has given me the confidence I needed to get out and play 18 holes with friends much more experienced than I am. Ben is a fantastic instructor with a proven method that he applies during our sessions to help me improve my game. Also, he is kind and easy to work with. Overall, I recommend working with Ben for any golfer that is trying to improve and I genuinely am looking forward to more lessons with Ben soon!`,
//         user: 'Eric O',
//         date: 'August 29, 2023'
//     },
//     {
//         comment: `I came in as an 8 HCP and have lowered it by a stroke, just two rounds after my short game lesson with Ben Putz. His teachings are easy to understand, and I am the most confident I have ever been on the green. Book the lesson. Read his book. Put in the work. Lower your score.`,
//         user: 'Charles G',
//         date: 'September 3, 2023'
//     },
//     {
//         comment: `Ben is a terrific pro. I’m basically a total beginner. Have always enjoyed the game but been too embarrassed of my poor shots to play much with my friends. In a single lesson, Ben introduced me to a few of his simple methods that I can implement on every shot. He fixed my address, my stance, my movement, my focus and most importantly, my contact with the ball. Ben is the real deal, and his coaching is some of best money I’ve ever spent on golf.`,
//         user: 'Adam F',
//         date: 'September 15, 2023'
//     }
// ]
const TESTIMONIALS = [
    {
        comment: `Dear Ben,
        I would just like to take the time to say how helpful you clinic has been to both myself and my dear cousin. We both now have similar things that we look out for such as the dimple and positioning. knowing why one would do something as oposed to just doing it really helps. We look forward to continuing this excursion for years to come with the ease and comfort that has been passed down to us from you.
        Again, thank you for yout time and patience. your knowledge of the game and wisdom with metaphors really helps. Keep doing what you are doing because if your clients see that you love, they will also.
        Melissa Lawrence-Banks`,
        user: 'Meliss Lawrence',
        // date: 'August 20, 2023'
    },
    {
        comment: `Ben, I loved your one-on-one driving lessons that I took last year. My golf game has improved tremendously and friends have definitely noticed! However, I did not get as much out of the group putting clinic, because of a few factors. People kept coming late after the lesson started, you had to repeat things, the group grew too big, then it got dark before I felt comfortable with the lesson details and practice. But overall, I think you are a great golf coach. Thanks a bunch!`,
        user: 'Toni Yadron',
        // date: 'August 22, 2023'
    },
    {
        comment: 'I’d like you’re putting technique it’s help me very much with distance control. I had 27 putts and shot 75 for 18 holes \n \n thanks again for everything',
        user: 'Mike Grein',
        // date: 'August 24, 2023'
    },
    {
       comment: `I have taken your driving lesson and putting lesson in the past two months. I thought you delivered the information very clearly and concise to assist in the learning process of how to learn the game of golf and how to continue to improve. The dimple and positioning has helped in my driving and the approach to putting has made me a better putter. On the average prior to the lesson for putting, I was averaging 3 to 4 putts at every hole. I was out on Oct 29, 2013, and I was averaging 1 or 2 putts on the holes. my Iron play is much better since I started practicing in the mirror. I played a round of nine holes in Mokena, Il and shot a 45 out of a possible 36. By bring my putts down, I was able to score lower than my usual 59 to 70.

       Thanks for the valuable demonstration and information provided.`,
       user: 'Tony Gentry',
    //    date: 'August 27, 2023'
    },
    {
        comment: `Ben,

        I am so glad that I have taken your Driving, Putting and Chipping Clinics. My scores have been dropping ever since. My hits off the tee have been more consistent and my short game have improved a lot.`,
        user: 'Frank S',
        // date: 'August 28, 2023'
    },
    
    {
        comment: `I loved your putting clinic. Having the definite “numbers” to work with as opposed to endlessly trying to get “a feel for the putt” made a huge difference to how I approach putting. The instruction to walk off every putt is also a great theory. Thanks so much.`,
        user: 'Judy Bolotin',
        // date: 'September 3, 2023'
    },
    {
        comment: `“I recently purchased a Groupon for lessons with Ben. I am new to golf and Ben really put me at ease and helped me to realize that I had natural ability. He understands the golf swing really well and is truly passionate about the game. His message is simple, intelligent, and genuine. I look forward to continuing to work with Ben as I try to improve my game next summer”.`,
        user: 'Sean Strother',
        // date: 'September 15, 2023'
    },
    {
        comment: `Ben, I enjoyed all of your lessons. The one I use most is your putting lesson. It has helped me greatly.

        I bought some dvd’s of Martin Chuck’s method from Revolution Golf and have found that method more helpful in the driving and iron shots. He basically plays ALL balls off the left foot area and teaches a swing as if you had a hula hoop being held out from your body at a 45 degree angle and striking the ball at the bottom of the hula hoop. I getting there. Playing better than I was at the start of the season.
        
        Ron Karlic`,
        user: 'Ron Karlic'
    },
    {
        comment: `Ben, I do believe you helped my game and will continue in the spring with your lessons.`,
        user: 'Gene'
    },
    {
        comment: `Ben,
        I liked your putting instruction because it was simple and easy to remember. It gave me a guide for distance on each putt, not just a feel. Unfortunately I couldn’t work in the chipping into my schedule this season but looking forward to, as soon as I can.
        Thank you Ben!`,
        user: 'Pat Casey'
    },
    {
        comment: `My scores have improved. The chipping lesson definitely helped. This was one of the weaker parts of my game. This lesson simplified this part of the game for me. The putting lesson also helped my game. I have not mastered the methodology but I definitely approach each putt more methodically looking at the break, speed and distance . I need to put more practice time into putting.`,
        user: 'Joe'
    },
    {
        comment: `Ben, thanks for making the game fun again. I walked away for many years, but now have a renewed passion. Your sense of humor…and straight forward method are a great combo. Cheers!`,
        user: 'Dan K'
    },
    {
        comment: `Ben,
        I enjoyed and learned from your putting and chipping clinics. I am looking forward to even more improvement next year with additional sessions.
        Thanks,
        Al`,
        user: 'Al'
    },
    {
        comment: `I have taken lessons from numerous instructors some even ranked in golf digest top 100 teachers and I have to say that Ben Mutz has a very inspiring approach . Communication is the key along with content of course but to really get it you need to understand the meaning . Ben will help you . Worth every penny`,
        user: 'Brad wise'
    },
    {
        comment: `Ben, my game has definitely improved because of your lessons. I have taken your full swing, putting, chipping,and individual training playing 18 holes with you and two other students. I have taken lessons from pros from Odyssey, Cog Hill, Silver Lake golf courses. By far your instructions were the best. I learned a great deal. The difference is that you actually teach a method. Your methods of putting and full swing actually work to improve anyone’s game.
        Thank You.`,
        user: 'Don Ski'
    },
]

export default function TestimonialCarousel(){
    const [testimonials, setTestimonials] = useState(TESTIMONIALS);
    const [count, setCount] = useState(0);
    const ref = useRef();
    const clientBottom = useClientBottom();
    const scrollPosition = useScrollPosition();
    const containerRef = useRef();
    const containerCoordsRef = useRef();


    
    
    const handleClick = (e)=>{
        document.querySelector(`[data-active='1']`).classList.remove(`${styles.active}`);
        ref.current.classList.add(`${styles.transition}`)
        if(e.target.dataset.dir === 'left'){
            ref.current.classList.add(`${styles.animate_left}`);
            return
        }
        ref.current.classList.add(`${styles.animate_right}`);
    }
    
    const handleTransitionEnd = (e)=>{
        document.querySelector(`[data-active='1']`).classList.add(`${styles.active}`);
        
        if(e.propertyName !== 'transform')return;
        let stateCopy = [...testimonials];
        console.log(e)
        if(e.target.classList.contains(`${styles.animate_left}`)){
            setTimeout(()=>{
                ref.current.classList.remove(`${styles.transition}`, `${styles.animate_left}`)
                const first = stateCopy.pop();
                stateCopy.unshift(first);
                setTestimonials(stateCopy);
                
            })
            setCount((prev)=> {
                if(prev ===  0) return testimonials.length - 1;
                return prev-=1;
            });
            return
        }
        setTimeout(()=>{
            ref.current.classList.remove(`${styles.transition}`, `${styles.animate_right}`)
            const first = stateCopy.shift();
            stateCopy.push(first);
            setTestimonials(stateCopy);
        })
        setCount((prev)=> {
            if(prev === (testimonials.length - 1)) return 0;
            return prev+=1;
        });
        
    }
    
    useEffect(()=>{
        containerCoordsRef.current = ref.current.getBoundingClientRect();
        if(clientBottom > containerCoordsRef.current.top + (containerCoordsRef.current.height/4)){
            containerRef.current.classList.add(`fade_in`)
        }
    },[scrollPosition])


    return (
        <section 
            className={styles.container}
            ref={containerRef}
        >
            <h3 className={styles.heading}>Mutz Method Student Stories</h3>
            <div className={styles.wrapper}>
                <div className={styles.slider} ref={ref} onTransitionEnd={handleTransitionEnd}>
                    {testimonials.map((testimonial,i)=>{
                        return (
                            <article key={i} className={i===1 ? styles.review + ' ' + styles.active : styles.review} data-active={i}>
                                <p className={'text ' + styles.comment}>{testimonial.comment}</p>
                                <div className={styles.bottom_container}>
                                    {/* <div className={styles.stars_container}>
                                        {[...Array(5)].fill(1).map((star,j)=>{
                                            return(
                                                <svg key={j} className={styles.star} fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star-filled</title> <path d="M30.383 12.699c-0.1-0.303-0.381-0.519-0.713-0.519-0 0-0 0-0 0h-9.898l-3.059-9.412c-0.124-0.276-0.396-0.464-0.713-0.464s-0.589 0.189-0.711 0.459l-0.002 0.005-3.059 9.412h-9.897c-0.414 0-0.749 0.336-0.749 0.75 0 0.248 0.121 0.469 0.307 0.605l0.002 0.001 8.007 5.818-3.059 9.412c-0.023 0.070-0.037 0.15-0.037 0.233 0 0.414 0.336 0.75 0.75 0.75 0.165 0 0.318-0.054 0.442-0.144l-0.002 0.001 8.008-5.818 8.006 5.818c0.122 0.090 0.275 0.144 0.441 0.144 0.414 0 0.75-0.336 0.75-0.75 0-0.083-0.014-0.164-0.039-0.239l0.002 0.005-3.059-9.412 8.010-5.818c0.188-0.138 0.308-0.357 0.308-0.605 0-0.083-0.014-0.163-0.038-0.238l0.002 0.005z"></path> </g></svg>
                                            )
                                        })}
                                    </div> */}
                                    {/* <p className={styles.user_date}>{testimonial.user} - {testimonial.date}</p> */}
                                    <p className={styles.user_date}>- {testimonial.user}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
            <button 
                className={styles.btn + ' ' + styles.left}
                onClick={handleClick}
                data-dir='left'
            >
                <Image src={'/arrow.png'} alt='arrow icon' height={20} width={20} className={styles.arrow} data-dir='left'/>
            </button>
            <button className={styles.btn} onClick={handleClick}>
                <Image src={'/arrow.png'} alt='arrow icon' height={20} width={20} className={styles.arrow} />
            </button>
            <TestimonialTickers testimonials={testimonials} count={count}/>
        </section>
    )
}