import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Quote from '../components/quote'
import Langs from '../components/projlangs'

export default function Home() {

    const langs = ["HTML","CSS","React"];

  return (
    <div className={styles.container}>
      <Head>
        <title>JordanPassant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

        <h1>Thanks for stoppying by!</h1>
        <h1>Feel free to have a gander at some of my projects!</h1>      
        
        <br></br>       

        <div className={styles.grid}>
          <a href="test.jordanpassant.ca" className={styles.card}>
            <h2>TaskTracker &rarr;</h2>
            <p>Click here for a live demo</p>
            
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>View my assorted works.</p>
          </a>         
        </div>

        <br></br>
        <br></br>

      <Quote />

      </main>

      <footer className={styles.footer}>
        <p>2022 Jordan Passant</p>
        <br></br>       
      </footer>
    </div>
  )
}
