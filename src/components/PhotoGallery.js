'use client'
import { useClientBottom, useScrollPosition } from '@/utils/ScrollContext'
import styles from './PhotoGallery.module.css'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import Link from 'next/link'

const images = [
    {
        src: '/b_mutz_12.jpg',
        alt: 'Ben Mutz with PXG associates.',
        object_fit: 'contain',
        outline: '2px solid var(--color_primary)',
        background_color: 'var(--color_primary)',
        href: 'https://www.groupgolfer.com/deals.php?id=1019930'
    },
    {
        src: '/b_mutz_11.jpeg',
        alt: 'Ben Mutz swinging a driver.',
        href: 'https://www.facebook.com/benmutzgolf'
    },
    {
        src: '/b_mutz_10.jpeg',
        alt: 'Ben Mutz looking at a golf ball and instructing.',
        href: 'https://www.facebook.com/benmutzgolf'
    },
    {
        src: '/b_mutz_9.jpeg',
        alt: 'Ben Mutz with PXG associates.',
        href: 'https://www.facebook.com/benmutzgolf'
    },
    {
      src: '/b_mutz2.jpg',
      alt: 'Putt Two Par written by Ben Mutz.',
      object_fit: 'cover',
      object_position: 'top',
      href: 'https://www.facebook.com/photo/?fbid=857185215946880&set=a.560674155597989'
    },
    {
      src: '/b_mutz3.jpg',
      alt: 'Ben Mutz posing with a driver in hand at an indoor golf simulator.',
      href: 'https://www.facebook.com/photo?fbid=623700862628651&set=a.474903867508352'
    },
    {
      src: '/b_mutz1.jpg',
      alt: 'Ben Mutz with son.',
      href: 'https://www.facebook.com/photo?fbid=754491742882895&set=a.474903867508352'
    },
    
    {
      src: '/b_mutz5.jpg',
      alt: 'Ben Mutz finishing a golf swing.',
      href: 'https://www.facebook.com/benmutzgolf'
    },
  ]

export default function PhotoGallery(){
    const scrollPosition = useScrollPosition();
    const topRowRef = useRef();
    const bottomRowRef = useRef();
    const clientBottom = useClientBottom();


    useEffect(()=>{
        const topRow_coords = topRowRef.current.getBoundingClientRect();
        const bottomRow_coords = bottomRowRef.current.getBoundingClientRect();
        if(clientBottom > topRow_coords.top + 150){
            topRowRef.current.classList.add(`fade_in`);
        }
        if(clientBottom > bottomRow_coords.top + 150){
            bottomRowRef.current.classList.add(`fade_in`);
        }
    },[scrollPosition])


    return (
        <section className={styles.container + ' mobile_no_animate'}>
            <div className={styles.gallery_wrapper}>
                <div ref={topRowRef} className={styles.row}>
                    {images.slice(0,4).map((img,i)=>{
                        return(
                            <div 
                                className={styles.item} 
                                key={i}>
                                <Link href={img.href} target='_blank'>
                                    <div 
                                        className={styles.image_wrapper}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className={styles.image}
                                            style={{
                                                objectFit: img.object_fit,
                                                outline: img.outline,
                                                backgroundColor: img.background_color,
                                                objectPosition: img.object_position
                                            }}
                                        >
                                        </Image>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div ref={bottomRowRef} className={styles.row}>
                    {images.slice(4,8).map((img,i)=>{
                        return(
                            <div 
                                className={styles.item} 
                                key={i}>
                                <Link href={img.href} target='_blank'>
                                    <div 
                                        className={styles.image_wrapper}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className={styles.image}
                                            style={{
                                                objectFit: img.object_fit,
                                                outline: img.outline,
                                                backgroundColor: img.background_color
                                            }}
                                        >
                                        </Image>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}