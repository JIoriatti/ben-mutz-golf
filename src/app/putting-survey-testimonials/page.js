import TestimonialCarousel from '@/components/TestimonialCarousel'
import styles from './page.module.css'
import Image from 'next/image'
import BackToTop from '@/components/BackToTop'


export default function PuttingSurveyPage() {
    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <h1 className={'h2_heading ' + styles.header}>Putting Survey</h1>
                <div className={styles.img_wrapper}>
                    <Image className={styles.img} src={'/ps.jpg'} alt="Ben Mutz's Putting Survey" height={712} width={550}></Image>
                </div>
                <div className={styles.testimonials_container}>
                    <h2 className={'h2_heading ' + styles.sub_header}>Testimonials</h2>
                    <div className={styles.testimonial_wrapper}>
                        <blockquote className={'text ' + styles.testimonial}><p className={styles.paragraph}>Ben, In regards to your putting coaching. It definitely has helped me learn putting through your simple math approach to teaching putting. It is a very simple system to learn and to understand. Because it is logical I am able to rely on your theories not only when I am playing but especially when I am practicing. This has allowed me to have the confidence of never going backwards and I improve daily based off the Foundation of Distance Control. The Mastery of Distance Control guarantees me that I will always have a solid putting round and this takes the pressure off of me and thus I am able to be more confident in the rest of my golf game. I now have more opportunities to make more putts and I improve day in and day out.</p>
                            <p className={styles.paragraph}>In the past, I’ve tried other approaches on how to putt but never felt completely confident. Logically, your Body Part to Body Part teaching makes it very easy for me to perform and it is a system that I can Trust. My mind is in complete control and applying your Body Part to Body Part method gives me the confidence to hit my spot precisely over and over again. I’m getting better day by day. Thank you Ben!!</p>
                        </blockquote>
                        <b className={styles.name}>Sebastian MacLean,
                            PGA Tour Latino-America</b>
                    </div>
                    <div className={styles.testimonial_wrapper}>
                        <blockquote className={'text ' + styles.testimonial}><p className={styles.paragraph}>I met Ben and had my first putting lesson with him in the fall of the 2015 golf season. Prior to meeting Ben, my work schedule on weekdays and family/social schedule on weekends didn’t allow me to play golf more than 4-5 times per season. On the few occasions when I did play, I depended on “feel” and “touch” to guide my distance control on the putting green. Unfortunately, because I was only playing a handful of times each year. I didn’t have any feel or touch! For the most part, my putting line would be fine and rarely would I miss the cup by more than a couple of feet to either side, but I consistently would leave myself several 8-10 foot second putts that would lead to 4-5 three-putt greens per round.</p>
                            <p className={styles.paragraph}>Ben introduced me to a very clever and unique method of distance control on the greens that started with knowing the distance in yards – like everything else is measured in golf! Then we would adjust for uphill and downhill slopes. From there, Ben’s body-part to body-part methodology very accurately translates to distance control. Through this concept, I no longer have any doubts about what distance and at what pace I need to putt the ball. With that big question solved, I can devote my full attention to the stroke knowing that distance is not going to be an unknown. In fact, once I have my line determined and I know the adjusted distance, I don’t even need to look back at the hole. All the pre-work is done before I address the putt. This has given me so much confidence knowing that frequent three-putts in my game are a thing of the past.
                            </p>
                            <p className={styles.paragraph}>I have since taken additional advanced putting lessons with Ben for green reading and stroke and for fine-tuning the body-part to body-part methodology specifically to putts of 5 yards and less. Correct speed on these shorter putts is absolutely critical to maximizing the cup size and the probability of making these important putts.
                            </p>
                            <p className={styles.paragraph}>If you currently depend on feel and touch and are plagued with frequent three-putting due to poor distance control, this course is a must for you!
                            </p>
                        </blockquote>
                        <b className={styles.name}>Greg S.</b>
                    </div>
                    <div className={styles.testimonial_wrapper}>
                        <blockquote className={'text ' + styles.testimonial}>
                            <p className={styles.paragraph}>Hi Ben, it’s Phyllis V. Golf has been the most fun since I took your classes! My awareness of the body part to body part has allowed me to strike the ball better, consistently, and more accurately, My short game and putting has improved more than I can explain. Dimple, dimple, dimple is the name of the game. Keeping it simple allowed me to get the most out of my game. It is fun!! It really works. Best money and time spent with you an my instructor, thank you!!</p>
                        </blockquote>
                        <b className={styles.name}>Phyllis V.</b>
                    </div>
                    <div className={styles.testimonial_wrapper}>
                        <blockquote className={'text ' + styles.testimonial}>
                            <p className={styles.paragraph}>Hi Ben, played Broken Arrow today. 46 on the front south and 51 on the north! Thanks again for the good instruction earlier this year.</p>
                        </blockquote>
                        <b className={styles.name}>Grandma Nancy P.</b>
                    </div>
                </div>
                <TestimonialCarousel />
            </section>
            <BackToTop />
        </main>
    )
}