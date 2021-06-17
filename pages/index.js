import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation/Navigation.jsx';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faTwitterSquare, faGitSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AADITYASHAHdotCOM</title>
        <link rel="icon" href="/face.jpeg" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://www.aadityashah.com">
            <Image src="/images/face.png" alt="my face" width='400' height='400'></Image>
          </a>
        </h1>

        <p className={styles.description}>
          {' '}
          <code className={styles.code}>developer.foodie.gadget freak.techie.enthusiast.</code>
        </p>
        

        <div className={styles.grid}>
        <Navigation />
        </div>
        <p>
          
        </p>
      </main>

      <footer className={styles.footer}>
      <p>
        Copyright 2021 Aaditya Shah.&nbsp;
      </p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel-light.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        
      </footer>
    </div>
  )
}