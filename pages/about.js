import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function About() {
    return (  
    
    <div className={styles.container}>
    <Head>
      <title>AADITYASHAHdotCOM</title>
      <link rel="icon" href="/face.jpeg" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Hello!<br/ >
        <a href="https://www.aadityashah.com">
          <Image src="/images/AJ.jpeg"
            height={450}
            width={675}
            alt="AJ with Glasses"
            >
          </Image>
        </a>
      </h1>

      <p>
          And welcome to my website! I am a developer by training, that has been in the professional space since 2005. 
      </p>
    </main>

    </div>
)

}

export default About