import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation/Navigation.jsx'
import Footer from '../components/Footer/Footer'
import styled from '@emotion/styled'
import ThemeToggle from '../components/ThemeToggle'

const Container = styled.div`
  display: flex;
  justify-content: center;
`;


export default function Home() {
  return (
    <Container>
      <div className={styles.container}>
        <Head>
          <title>AADITYASHAHdotCOM</title>
          <link rel="icon" href="/face.jpeg" />
        </Head>
        <main className={styles.main}>
          <ThemeToggle />
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

          <Footer />
      </div>
    </Container>
  )
}