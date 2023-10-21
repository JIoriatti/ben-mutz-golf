import styles from './page.module.css'
import Intro from '@/components/Intro'
import KissSection from '@/components/KissSection'
import StudentCountSection from '@/components/StudentCountSection'
import MethodologySection from '@/components/MethodologySection'

import PhotoGallery from '@/components/PhotoGallery'
import Contact from '@/components/Contact'
import P2PSection from '@/components/P2PSection'
import FlickityCarousel from '@/components/FlickityCarousel'
import HeroImage from '@/components/HeroImage'
import BackToTop from '@/components/BackToTop'
import DynamicFooter from '@/components/DynamicFooter'

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      
      <main className={styles.main}>
        <section className={styles.hero_container}>
          <HeroImage />
          <Intro />
        </section>
        <MethodologySection />
        <P2PSection />
        <KissSection />
        {/* <TestimonialCarousel /> */}
        <StudentCountSection />
        <h3 className={styles.testimonial_header + ' h2_heading'}>See what students have to say:</h3>
        <FlickityCarousel />
        <h3 className={styles.photo_gallery_header}>Check out Ben on Facebook</h3>
        <PhotoGallery />
        <h4 className={styles.contact_header} id='contact'>Get in touch</h4>
        <p className={styles.contact_sub_header}>Leave your name, email, and message for Ben</p>
        <Contact/>
        <BackToTop />
        {/* <DynamicFooter /> */}
      </main>
    </>
  )
}
