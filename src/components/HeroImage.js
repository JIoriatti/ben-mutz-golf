'use client'
import { useEffect, useState } from 'react'
import styles from './HeroImage.module.css'
import Image from 'next/image'
import bannerCombined from '../../public/bannerCombined.png'


export default function HeroImage(){
    return(
        <>
            
            <div className={styles.absolute_wrapper}>
                <div className={styles.banner_wrapper}>
                    <Image
                        className={styles.banner}
                        priority
                        src={bannerCombined}
                        alt='Illustrations of digitalized golfers; a male in the foreground and a female in the background.'
                        placeholder='blur'
                        sizes='100vw'
                        quality={'100'}
                    ></Image>
                </div>
            </div>
            
        </>
    )
}