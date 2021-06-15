import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          Welcome!<br/ >
          <a href="https://www.aadityashah.com">
            <Image src="/images/face.png" alt="my face" width='400' height='400'></Image>
          </a>
        </h1>

        <p className={styles.description}>
          {' '}
          <code className={styles.code}>developer.foodie.gadget freak.techie.enthusiast.</code>
        </p>

        <div className={styles.grid}>
          <a href="/AJShah-2021.pdf" className={styles.card}>
            <h3>Résumé &rarr;</h3>
            <p>Download a copy of my résumé.</p>
          </a>

          <a
            href="/about"
            className={styles.card}
          >
            <h3>About &rarr;</h3>
            <p>Some information about me...</p>
          </a>

          <a href="/blog/first-post" 
            className={styles.card}>
                  <h3>Blog &rarr;</h3>
                  <p>Read my rants...</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>How-to's &rarr;</h3>
            <p>
              How-to's for any technology...
            </p>
          </a>
        </div>
        <p>
          <a 
            href="https://www.linkedin.com/in/aadityajshah"
            target="_blank"
            rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} width="16" className="fa_icon"/>
          </a>
          <a 
            href="https://www.facebook.com/nagarseth"
            target="_blank"
            rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} width="16" className="fa_icon"/>
          </a>
          <a
            href="https://www.twitter.com/nagerseth"
            target="_blank"
            rel="noreferrer"
            >
              &nbsp;<FontAwesomeIcon icon={faTwitterSquare} width="16" className="fa_icon"/>
          </a>
          <a
            href="https://www.github.com/aadityajshah"
            target="_blank"
            rel="noreferrer"
            >
              &nbsp;<FontAwesomeIcon icon={faGitSquare} width="16" className="fa_icon"/>
          </a>
          <a
            href="https://www.instagram.com/nagerseth"
            target="_blank"
            rel="noreferrer"
            >
              &nbsp;<FontAwesomeIcon icon={faInstagramSquare} width="16" className="fa_icon"/>
          </a>
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
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        
      </footer>
    </div>
  )
}