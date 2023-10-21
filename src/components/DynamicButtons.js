import styles from './DynamicButtons.module.css'
import { useBookNowPosition, useFooterPosition } from '@/utils/ScrollContext'
import PuttTwoPar from './PuttTwoPar';
import { useEffect, useRef, useState } from 'react';
import BookNow from './BookNow'

export default function DynamicButtons(){
    const bookNowPosition = useBookNowPosition();
    const footerPosition = useFooterPosition();
    const [clientHeight, setClientHeight] = useState(null);
    const ref = useRef();
 
    useEffect(()=>{
        setClientHeight(window.innerHeight);
        let timeout = setTimeout(()=>{
            ref.current.style.visibility = 'visible';
        },10);

        return ()=> clearTimeout(timeout);
    },[]);
    return(
        <div 
               className={(footerPosition >= clientHeight && bookNowPosition <= 0) ? `${styles.container} ${styles.show}` : `${styles.container} ${styles.hide}`}
               ref={ref}
            >
                    <PuttTwoPar footer={true}/>
                    <span className={styles.divider}></span>
                    <BookNow footer={true}/>
            </div>
    )
}