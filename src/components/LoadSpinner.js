import styles from './LoadSpinner.module.css'


export default function LoadSpinner(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}