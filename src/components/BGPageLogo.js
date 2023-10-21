'use client'
import { usePathname } from 'next/navigation'
import styles from  './BGPageLogo.module.css'


export default function BGPageLogo(){
    const path = usePathname();
    if(path === '/'){
        return;
    }
    
    return (
        <div className={styles.container}>
            <span className={styles.bmg}>BMG</span>
        </div>
    )
}