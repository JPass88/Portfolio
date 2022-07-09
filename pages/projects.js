import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Quote from '../components/quote'
import Langs from '../components/projlangs'

export default function Home() {

    const langs = [ 
        { id:1, language:"HTML"},
        { id:2, language:"CSS"},
        { id:3, language:"React"} 
    ];

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
        <h3>Feel free to have a gander at some of my projects!</h3>      
        
        <br></br>       

        <div className={styles.grid}>
          <a href="https://test.jordanpassant.ca" className={styles.card}>
            <h2>TaskTracker &rarr;</h2>
            <p>Click here for a live demo</p>
            <Langs langs={langs}/>
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
