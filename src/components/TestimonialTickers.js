import styles from './TestimonialTickers.module.css'


export default function TestimonialTickers({testimonials, count}){
    return(
        <div className={styles.container}>
            {testimonials.map((testimonial,i)=>{
                return(
                    <span key={i} className={i === count ? styles.tick + ' ' + styles.active : styles.tick}></span>
                )
            })}
        </div>
    )
}