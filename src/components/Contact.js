'use client'
import styles from './Contact.module.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import LoadSpinner from './LoadSpinner'
import { useScrollPosition } from '@/utils/ScrollContext'
import BGLogo from './BGLogo'

export default function Contact(){
    const [message, setMessage] = useState('');
    const [clientBottom, setClientBottom] = useState(null);
    const scrollPosition = useScrollPosition();
    const ref = useRef();
    const successRef = useRef();

    

    useEffect(()=>{
        setClientBottom(window.innerHeight);
        const container_coords = ref.current.getBoundingClientRect();
        if(clientBottom > container_coords.top + (container_coords.height/2)){
            ref.current.classList.add(`fade_in`)
        }
    },[scrollPosition])

    const {
        register,
        handleSubmit,
        formState: {
            errors, isSubmitting, isSubmitSuccessful
        },
        reset,
        getValues,
    } = useForm();


    useEffect(()=>{
        let successMessageFadeOut;
        if(isSubmitSuccessful){
            successRef.current.classList.toggle(`${styles.hide_success}`)
            successMessageFadeOut = setTimeout(()=>{
                successRef.current.classList.toggle(`${styles.hide_success}`)
            },6000);
        }

        return ()=> clearTimeout(successMessageFadeOut);
    },[isSubmitSuccessful])

    
    const onSubmit = (data) =>{
        return new Promise((resolve)=>{
            const {first, last, email, message } = data;
            Email.send({
                SecureToken: process.env.NEXT_PUBLIC_EE_TOKEN,

                // Host: "smtp.elasticemail.com",
                //smtp server authentication


                
                // Username: process.env.NEXT_PUBLIC_EE_USERNAME,
                //password for jioriattiDev@gmail.com
                // Password: process.env.NEXT_PUBLIC_EE_PASSWORD,

                // Username: 'je6ioriatti@gmail.com',
                //password for je6ioriatti@gmail.com
                // Password: "28B8177A7D11DBAE4B6C282CA9D31FB1DD8A", 

                //where to send email to (Ben for benmutzgolf.com)
                To: process.env.NEXT_PUBLIC_EE_TO,

                // from user on website
                From: process.env.NEXT_PUBLIC_EE_FROM,
                // From: 'je6ioriatti@gmail.com',

                ReplyTo: `${email}`,
                Subject: "New Ben Mutz Golf Request",
                Body: `<h1>You have a new inquery from your website!</h1><strong style="font-size: 20px; text-decoration: underline;">Name</strong> : <p style="font-size: 16px; display: inline-block;">${first} ${last}</p> <br></br> <br></br>` +

                    `<strong style="font-size: 20px; text-decoration: underline;">Email Address</strong> : <p style="font-size: 16px; display: inline-block;">${email}</p> <br></br> <br></br>` +

                    `<strong style="font-size: 20px; text-decoration: underline;">Message</strong> : <p style="font-size: 16px; display: inline-block;">${message}</p> <br></br> <br></br> <br></br>`,
            }).then((message)=>{
                console.log(message)
                if(message === 'OK'){
                    reset();
                    setMessage('');
                }
                resolve();
            })
        })
    }

    return(
        <section ref={ref} className={styles.container} id='contact-form'>
            <p ref={successRef} className={styles.success + ' ' + styles.hide_success}>{'Message sent successfully, thank you for reaching out!'}</p>
            <div className={styles.wrapper}>
                {/* <div className={styles.img_wrapper}>
                    <Image src={'/putter_2.png'} alt='Image of a PXG putter' fill className={styles.img} sizes='30vw'></Image>
                </div> */}
                <form onSubmit={handleSubmit(onSubmit)}className={'bleed ' + styles.form}>
                    <div className={styles.name_wrapper}>
                        <input
                            {...register('first',{
                                required: 'First name is required'
                            })}
                            type="text" 
                            placeholder='First' 
                            className={styles.f_name}
                        />
                        <input 
                            {...register('last')}
                            type="text"
                            placeholder='Last' 
                            className={styles.l_name}
                            />
                    </div>
                    
                    <p className={errors.first ? styles.error + ' ' + styles.show_error : styles.error}>{`${errors?.first?.message ?? ''}`}</p>
                    
                    <input 
                        {...register('email',{
                            required: 'Email is required'
                        })}
                        type="email"  
                        placeholder='Email' 
                        className={styles.email}
                    />
                    <p className={errors.email ? styles.error + ' ' + styles.show_error : styles.error}>{`${errors?.email?.message ?? ''}`}</p>
                    <textarea
                    {...register('message',{
                        maxLength: 255
                    })}
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10"
                        placeholder='Message'
                        className={styles.message}
                        value={message}
                        onChange={(e)=> setMessage(e.target.value)}
                        maxLength={255}
                    ></textarea>
                    <p className={message.length === 255 ? styles.message_length + ' ' + styles.red : styles.message_length}>{message.length} / 255 <span style={{marginLeft: '6px'}}>character limit</span></p>
                    <div className={styles.btn_wrapper}>
                        <button 
                            type='submit'
                            disabled={isSubmitting}
                            className={styles.btn}
                        >Send</button>
                        {isSubmitting && 
                            <LoadSpinner />
                        }
                    </div>
                </form>
                {/* <div className={styles.img_wrapper}  data-pos='right'>
                    <Image src={'/putter_1.png'} alt='Image of a PXG putter' fill className={styles.img} sizes='30vw'></Image>
                </div> */}
            </div>
            <BGLogo />
        </section>
    )
}