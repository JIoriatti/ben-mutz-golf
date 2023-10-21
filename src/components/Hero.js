// 'use client'
// import styles from './Hero.module.css'
// import { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'

// export default function Hero({}){

//     return(
//         <section className={styles.container}>
//             <div className={styles.slider}>
//                 <div className={styles.slide}>
//                     <div className={styles.hero_img_wrapper}>
//                         <Image 
//                             className={styles.hero_img}
//                             src={'/b_mutz1.jpg'}
//                             alt='Ben Mutz with friend.'
//                         />
//                     </div>
//                 </div>
//             </div>        
//         </section>
//     )
// }

'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'

const images = [
    {
      src: '/b_mutz4.jpg',
      alt: 'Mutz Method Logo with a golfer putting in the background.'
    },
    {
      src: '/b_mutz2.jpg',
      alt: 'Putt Two Par written by Ben Mutz.'
    },
    {
      src: '/b_mutz3.jpg',
      alt: 'Ben Mutz posing with a driver in hand at an indoor golf simulator.'
    },
    {
      src: '/b_mutz1.jpg',
      alt: 'Ben Mutz with friend.'
    },
    
    {
      src: '/b_mutz5.jpg',
      alt: 'Ben Mutz finishing a golf swing.'
    },
  ]

export default function Hero({}){
    const [sliderImages, setSliderImages] = useState(images);
    const [sliderDir, setSliderDir] = useState(0);
    const sliderRef = useRef(null);

    // const handleClick= (e) =>{
    //     sliderRef.current.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1)'
        
    //     if(e.target.textContent === 'left'){
    //         setSliderDir(0);
    //         sliderRef.current.classList.add(`${styles.animate_left}`)
            
    //     }
    //     else{
    //         setSliderDir(1);
    //         sliderRef.current.classList.add(`${styles.animate_right}`)
    //     }
    // }
    const onSliderAnimationEnd = () =>{
        const stateCopy = [...sliderImages];
        sliderRef.current.classList.remove(`${styles.animate_left}`, `${styles.animate_right}`);
        if(sliderDir === 0){
            setTimeout(()=>{
                sliderRef.current.style.transition = 'none'
                const lastImage = stateCopy.pop();
                stateCopy.unshift(lastImage);
                setSliderImages(stateCopy);
            })
        }
        else if(sliderDir === 1){
            setTimeout(()=>{
                sliderRef.current.style.transition = 'none'
                const firstImage = stateCopy.shift();
                stateCopy.push(firstImage);
                setSliderImages(stateCopy);
            })
        }
    }   

    useEffect(()=>{
        const slideShow = setInterval(()=>{ 
            sliderRef.current.style.transition = 'transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1)'
            setSliderDir(1);
            sliderRef.current.classList.add(`${styles.animate_right}`)
        },6000)

        return ()=> clearInterval(slideShow);
    },[])


    return (
        <section 
            // onClick={handleClick} 
            className={styles.container}
        >
            <div className={styles.slider_wrapper}>
                {/* <div className={styles.slider} onTransitionEnd={onSliderAnimationEnd} ref={sliderRef}> */}
                    {sliderImages.filter((img,i)=> i < 2).map((img, i, arr)=>{
                        return(
                            <div key={i} className={styles.absolute_container}>
                                <div className={styles.hero_image_wrapper} data-active={i===0 ? 'active' : null} ref={i===0 ? sliderRef : null} onTransitionEnd={onSliderAnimationEnd}>
                                    <Image className={styles.hero_image} src={img.src}  alt={img.alt} height={600} width={400} />
                                </div>
                            </div>
                        )
                    })}
                {/* </div> */}
            </div>
            {/* <button className={styles.test}onClick={handleClick}>left</button>
            <button className={styles.test}onClick={handleClick}>right</button> */}
        </section>
    )
}