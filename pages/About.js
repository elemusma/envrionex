import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Environex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <Navbar />
    <h1>About page</h1>
      

      
    </div>
  )
}
