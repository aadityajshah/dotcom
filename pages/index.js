import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AADITYASHAHdotCOM</title>
        <link rel="icon" href="/face.jpeg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br/ ><a href="https://www.aadityashah.com">AADITYASHAHdotCOM! </a>
        </h1>

        <p className={styles.description}>
          {' '}
          <code className={styles.code}>developer.foodie.gadget freak.techie.enthusiast.</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Résumé &rarr;</h3>
            <p>Download a copy of my résumé.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Read my rants...</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Reviews &rarr;</h3>
            <p>Read my reviews on everything...</p>
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
