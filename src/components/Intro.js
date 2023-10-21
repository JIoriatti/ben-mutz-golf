import styles from './Intro.module.css'
import BookNow from './BookNow';
import PuttTwoPar from './PuttTwoPar';
import GolfBall from './GolfBall';


export default function Intro({}) {
    return (
        <section className={styles.container + ' mobile_no_animate'}>
            
            <h1 className={styles.heading + ' ' + styles.fade_in}>
                
                The {`\n`} <span className={styles.mutz_word}>Mutz Method</span>
                {/* <div className={styles.mutz_word}>
                    {MUTZ.map((letter, i) => {
                        return (
                            <span
                                key={i}
                                className={styles.mutz_letter}
                                style={{
                                    whiteSpace: 'pre',
                                    animationDelay: `${(1 + (i / 8)).toFixed(2)}s`,
                                    animationDuration: `${(0.35 + (i / 6)).toFixed(2)}s`
                                }}
                            >{letter}
                            </span>
                        )
                    })}
                </div> */}
                {/* &nbsp; */}
                {/* <div className={styles.mutz_word}>
                    {METHOD.map((letter, i) => {
                        return (
                            <span
                                key={i}
                                className={styles.mutz_letter}
                                style={{
                                    whiteSpace: 'pre',
                                    animationDelay: `${(1.5 + (i / 8)).toFixed(2)}s`,
                                    animationDuration: `${(0.35 + (i / 6)).toFixed(2)}s`
                                }}
                            >{letter}
                            </span>
                        )
                    })}
                </div> */}
                {`\n`}
                <span style={{
                    color: 'var(--color_primrary)',
                    animationDelay: `0.5s`,
                    animationDuration: `2s`
                }}>of</span>
                {`\n`}
                <span style={{
                    color: 'var(--color_primrary)',
                    animationDelay: `1s`,
                    animationDuration: `2s`
                }}>Golf</span>
                {`\n`}
                <span style={{
                    color: 'var(--color_primrary)',
                    animationDelay: `2s`,
                    animationDuration: `2s`
                }}>Instruction</span>
            </h1>
            <h3 className={styles.sub_heading}>Golf instruction the way it was meant to be: <strong style={{ fontWeight: '900' }}>Simple.</strong></h3>
            <p className={'text ' + styles.description}><br />
                Ben Mutz is the author of “The Five Objectives of a Successful Golf Swing – One Dimple at a Time”, <span style={{color: '#8bd5ad', fontWeight: '800'}}>{`"`}</span><a className={styles.link} href='https://www.amazon.com/Putt-Two-Par-Distance-Control/dp/B0BV1LSZ3M/ref=sr_1_1?crid=2HF7OWCD3FP8A&keywords=ben+mutz+golf&qid=1696518667&sprefix=ben+mutz+golf%2Caps%2C67&sr=8-1' target='_blank'>Putt Two Par – How To Master Distance Control When Putting</a><span style={{color: 'var(--color_primary)', fontWeight: '800'}}>{`"`}</span>, and creator of the Mutz Method of Golf Instruction.
                The Mutz Method focuses on two primary concepts - <strong>Weight Transfer</strong> and <strong>Distance Control</strong>. The foundation of the full swing is weight transfer; for putting and the short game, distance control is king. The Mutz Method will make you a master of these two fundamentals - <strong> unlocking your Golfing Brain and teaching you to teach yourself</strong>. With just one, two-hour lesson say goodbye to three-putts and say hello to lower scores. Garunteed.
            </p>
            <div className={styles.button_container}>
                <PuttTwoPar/>
                <BookNow/>
                {/* <GolfBall position={'left'}/> */}
                {/* <GolfBall position={'right'}/> */}
            </div>
            {/* <div className={styles.ball_container}> */}
                
            {/* </div> */}
        </section>
    )
}