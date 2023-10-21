import './globals.css'
import { Exo_2, Bai_Jamjuree } from 'next/font/google'
import ScrollProvider from '@/utils/ScrollContext'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Naviagtion from '@/components/Navigation'
import Head from 'next/head'
import LoadCover from '@/components/LoadCover'
import MobileNav from '@/components/MobileNav'
import BGPageLogo from '@/components/BGPageLogo'

const exo_2 = Exo_2({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'] })

const font = Bai_Jamjuree({subsets: ['latin'], weight: ['400','500','600','700']});


export const metadata = {
  title: 'Ben Mutz Golf | Golf Lessons Diversey Driving Range Lincoln Park Chicago',
  description: 'Ben Mutz - golf pro, author of Putt Two Par, and creator of the Mutz-Method. Golf lessons at Diversey Driving Range in Lincoln Park, Chicago, is the premier location for private and group instruction.',
  creator: 'Jior | James Ioriatti',
  alternates: {
    canonical: '/benmutzgolf.com',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"/>
      </Head>
      <ScrollProvider>
        <body className={font.className}>
            <MobileNav />
            <LoadCover />
          <div className={'main_wrapper'} id='main_wrapper'>
            <BGPageLogo />
            <Naviagtion />
            {children}
            <Footer />
          </div>
        </body>
        <Script id='smptjs'src="https://smtpjs.com/v3/smtp.js">
        </Script>
        <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" strategy='afterInteractive' ></Script>
      </ScrollProvider>
    </html>
  )
}
