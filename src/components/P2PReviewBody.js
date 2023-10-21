'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './P2PReviewBody.module.css'


export default function P2PReviewBody({body}){
    const [isExpanded, setIsExpanded] = useState(false);

    const ref = useRef();
    const handleClick=(e)=>{
        if(e.target.textContent === 'Read more'){
            ref.current.classList.add(`${styles.expanded}`)
            setIsExpanded(true);
        }
        else{
            ref.current.classList.remove(`${styles.expanded}`)            
            setIsExpanded(false);
        }
    }
    return(
        <>
            <div ref={ref} className={styles.body_wrapper}>
                <p  className={styles.body + ' text'}>{body.replace(/Read more/gm, '')}
                </p>
            </div>
            
        </>
    )
}