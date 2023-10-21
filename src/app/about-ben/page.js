import Image from 'next/image'
import styles from './page.module.css'


export default function AboutBenPage(){
    return(
        <main className={styles.main}>
            <section className={styles.container}>
                <h1 className={'h2_heading ' + styles.header}>About Ben Mutz</h1>
                <Image className={styles.img} src={'/b_mutz3.jpg'} alt='Ben Mutz' height={586} width={600}></Image>
                <p className={'text ' + styles.description}>-I began my Teaching Career in 1987 and I experienced success in many areas of Golf Instruction from the Pure Beginner on up to the Most Skilled Golfers.
<br></br>-After years of diligent hard work, the First Book of my Three Part Series was Recently Published on Amazon: <a href={'https://www.amazon.com/Putt-Two-Par-Distance-Control/dp/B0BV1LSZ3M/ref=asc_df_B0BV1LSZ3M/?tag=hyprod-20&linkCode=df0&hvadid=647234751544&hvpos=&hvnetw=g&hvrand=9809459673005056763&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9021743&hvtargid=pla-1959854310225&psc=1&gclid=CjwKCAjwysipBhBXEiwApJOcu8pk6gZSTxyaYlslOF12waeneie6C79IkweQ8FTHDpBUyN9Voste8hoCKFoQAvD_BwE'} target='_blank'>Putt Two Par - How To Master Distance Control When Putting</a> is designed to complement my www.ULTIMATEGOLFPUTTINGCLINIC.com
<br></br>-Books two and three of the series will be completed soon and those subjects cover the Short Game of Chipping and Pitching as well as the Full Swing.
<br></br>-I teach by a Method and the key to the success is in my ability to UNLOCK the Golfer’s Brain and accomplish this through the Art of Question and Answer teaching.
<br></br>-After every Lesson, either Private or in a Clinic setting, the students will receive written notes on the Lesson Structure and on Drills so they are able to Practice with a Purpose.
<br></br>-I believe that it is important to build a strong FOUNDATION of knowledge Step by Step with the end goal of having the Students be able to Teach Themselves towards Ultimate Improvement and Performance.</p>
            </section>
        </main>
    )
}