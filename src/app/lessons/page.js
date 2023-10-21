import BookNow from '@/components/BookNow'
import styles from './page.module.css'
import BGLogo from '@/components/BGLogo'
import BackToTop from '@/components/BackToTop'


export default function LessonsPage(){
    return(
        <>
            <main className={styles.main}>
                <section className={styles.container}>
                    <h1 className={'h2_heading ' + styles.header}>Golf Lessons</h1>
                    <div className={styles.top_wrapper}>
                        <p className={'text ' + styles.description}>My method of teaching golf allows students to be free from mechanical thought. We don’t play golf mechanically, therefore I don’t teach golf mechanically! Whether you are a beginner, intermediate or advanced golfer I will <b>“teach you to teach yourself”.</b></p>
                        <p className={'text ' + styles.description}>This method teaches the student to “CREATE” a golf swing and not mechanically reproduce it. Teaching the student to understand the necessity of <b>Mind/Body</b> coordination through my <b>“Body Part to Body Part”</b> invention is one of the major keys to my success of Lowering Golf Scores.</p>
                        <BookNow footer={true}/>
                        <h2 className={styles.sub_header}>Golf Lesson Programs</h2>
                        <p className={'text ' + styles.description}>There are two series of golf instruction to chose from: <b>The Full Swing or the Putting/Short Game Series.</b> My suggestion is to first take either the Full Swing Lesson introducing you to my Theory of Weight Transfer or the Putting Lesson introducing you to Distance Control. <b>From those two lessons you will start to realize your success will be because of your THINKING which will guide you into your PHYSICAL success.</b></p>
                    </div>
                    <div className={styles.bottom_wrapper}>
                        <h3 className={styles.sub_header}>Outline for lower golf scores</h3>
                        <div className={styles.list}>
                            <p className={'text ' + styles.description}>1 | Full Swing – Lower Body Weight Transfer </p>
                            <p className={'text ' + styles.description}>2 | Putting – Learning how to Master Distance Control</p>
                            <p className={'text ' + styles.description}>3 | Full Swing – Upper Body and how that connects via the Lower Body</p>
                            <p className={'text ' + styles.description}>4 | Chipping – connecting the Distance Control from the Putting Method</p>
                            <p className={'text ' + styles.description}>5 | Grip, Stance and Pitching – How to Control Distances in your Wedge Game</p>
                            <p className={'text ' + styles.description}>6 | The Driver Swing and a complete review. Connecting all of the Mental Dots</p>
                        </div>
                        <p className={'text ' + styles.description + ' ' + styles.last}>In this initial Golf Lesson Packages the subject matter is the same for all golfers at all levels of ability. Throughout this time together you will be guided to understand your strengths and weakness in your golf game. I accomplish this through Q & A and this approach to Golf Education is what makes my program work – this will work for you otherwise I will give you back your money – guaranteed!</p>
                    </div>
                    
                </section>
            </main>
            <BackToTop />
        </>
    )
}