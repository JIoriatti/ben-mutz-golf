import BookNow from '@/components/BookNow'
import styles from './page.module.css'
import Image from 'next/image'
import BackToTop from '@/components/BackToTop'

export default function UltimatePuttingClinicPage(){
    return(
        <main className={styles.main}>
            <section className={styles.top_wrapper}>
                <h1 className={'h2_heading ' + styles.header}>The Ultimate Putting Clinic</h1>
                <p className={'text ' + styles.description}>The Ultimate Golf Putting Clinic is the “Cliff Notes” to my book: Putt Two Par – How To Master Distance Control When Putting”. It is said that the fastest way to a golfer’s heart is to lower their golf scores. Putting accounts for the most shots in a typical round of golf. The fastest way to lower golf scores is to reduce the number of putts.</p>
                <p className={'text ' + styles.description}>Soon after learning this putting method, you will be well on your way to becoming a member of the “50 Yard and In Club” – within 50 yards of the hole, your MAXIMUM shot total will be 3 strokes!</p>
                <p className={'text ' + styles.description}>After your clinic, you will receive the 170 page photo E-Book – “It’s Not the Putter It’s the Math” – How to become a Master at Distance Control.</p>            
                <BookNow footer={true}/>
            </section>
            <h2 className={styles.sub_header}>The Putting Clinic Itinerary</h2>
            <div className={styles.row}>
                <div className={styles.text_wrapper}>
                    <b className={styles.i_step}>1 | Distance Control</b>
                    <p className={'text ' + styles.description}>Without the ability to control the speed of a putt, you can never become a master putter – EVER! In this first stage of your putting learning, you will be taught how to control distance by using one tempo. No longer will you be standing over a slippery downhill putt and be thinking, “hit it softly”, or an uphill putt and be thinking, “hit it harder”. That mind set of “Feel and Touch” is confusing because it creates indecision and guess work on your part. This will change when you are taught to know EXACTLY what speed you are going to hit your putt before you ever address the ball. This system will guarantee you that at the end of this 2-hour putting clinic, you will well be on your way to becoming a master putter by first and foremost becoming a master of distance control. So ask yourself this one question – “If you improved your putting today, would you lower your golf score? If that answer is Yes – attend this clinic because that aspect of your putting statistics WILL improve, guaranteed!</p>
                </div>
                <div className={styles.img_wrapper}>
                    <Image className={styles.img + ' ' + styles.opb} src={'/UPC1.jpg'} alt='Ben Mutz in Mutz Method putting stance.' fill></Image>
                </div>
            </div>
            <div className={styles.row_reverse}>
                <div className={styles.text_wrapper}>
                    <b className={styles.i_step}>2 | Golf Club Design</b>
                    <p className={'text ' + styles.description}>This segment will teach you ball position in your putting stance. It is also designed to teach you ball position with all the golf clubs in your bag. This section has improved putting participants’ ball striking ability overnight by understanding how golf clubs are designed and how they are engineered to be used properly. When you learn this concept, your golfing mind will get unlocked towards greatness and you will reach your fullest potential. You will learn where to play the ball within your stance with every golf club in your bag – guaranteed!</p>
                </div>
                <div className={styles.img_wrapper}>
                    <Image className={styles.img} src={'/UPC2.jpg'} alt='Ben Mutz in Mutz Method putting stance.' fill></Image>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.text_wrapper}>
                    <b className={styles.i_step}>3 | Reading Greens</b>
                    <p className={'text ' + styles.description}>This is absolutely a favorite subject within this putting clinic. You will be taught a simple approach to green reading that ties into the distance control factor. You will be taught how to gauge distance and how to aim to a specific gravity point that will take your ball right into the back of the cup. You will stop thinking breaking putts and start thinking straight line putts and then let gravity do its job. All golfers at all levels walk away from this segment with a greater and simpler approach to knowing where to aim their putt for ultimate success. Everything that is being taught to you is connected to the theory of distance control. You’ll learn how to read a green by understanding that your goal is to find the gravity line for each and every putt, then aim your putter face to the gravity point that you want the start your putt. This is easy to learn without anymore guessing – guaranteed!</p>
                </div>
                <div className={styles.img_wrapper}>
                    <Image className={styles.img} src={'/UPC3.jpg'} alt='Ben Mutz in Mutz Method putting stance.' fill></Image>
                </div>
            </div>
            <div className={styles.row_reverse}>
                <div className={styles.text_wrapper}>
                    <b className={styles.i_step}>4 |  How to Hold your Putter – The Grip</b>
                    <p className={'text ' + styles.description}>In this section, you will be taught “Where the Palm Goes – So goes the Putter Face” and where the palm goes is all related to where your hands are situated on the putting grip. You will learn that the position of your dominant hand is the key to this easy learning concept. This concept is going to tie into the rest of your golf shots as well. Mark an “X” in the middle of your dominant palm and keep humming: “Where the Palm Goes – So Goes the Club Face”….. this one thought will get your club face going down the perfect target line on when putting and on every shot from a One Yard Putt to a Full Swing Drive – Guaranteed!</p>
                </div>
                <div className={styles.img_wrapper}>
                    <Image className={styles.img + ' ' + styles.opt} src={'/UPC4.jpg'} alt='Ben Mutz in Mutz Method putting stance.' fill></Image>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.text_wrapper}>
                    <b className={styles.i_step}>5 | The Physical Putting Stroke:</b>
                    <p className={'text ' + styles.description}>At this point in the clinic, we are one hour and 45 minutes into your learning. Notice that the physical stroke aspect of putting is DELIBERATELY left as the last clinic subject and follows what we addressed in your mind. This is the key to this teaching method. Remember, “All Physical Action is a Root of the Mind” so when we get the mind in order, the physical stroke naturally follows. It is at this stage in the learning that students are asked if they got into their car now and did not learn one thing about their physical putting stroke, do they believe that their putting stroke average would lower. 100% of the time, the students say “Yes”. The reason why this is true is that this method unlocks your golfing mind and teaches you how to teach yourself. No more confusion – no more guess work! Every time you play and/or practice, you will improve! You will become a master putting machine in a very short period of time when you apply this simple approach. Remember, if you want to become a master putter, you first and foremost must become a master at distance control. You’ll begin your journey of putting improvement for life after attending this 2-hour putting clinic – Guaranteed!</p>
                </div>
                <div className={styles.img_wrapper}>
                    <Image className={styles.img + ' ' + styles.opm} src={'/UPC5.jpg'} alt='Ben Mutz in Mutz Method putting stance.' fill></Image>
                </div>
            </div>
            <BackToTop />
        </main>
    )
}