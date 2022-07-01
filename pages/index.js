import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../Components/Main'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Pablo Di Pietro - Developer</title>
        <meta name="description" content="Pablo Di Pietro Fullstack Developer React Node Postrgess Mongo" />
        <link rel="icon" href="/perfil.jpg" />
      </Head>
      <Navbar
        enlaces={[{name:'Proyectos', ir: '/proyectos'} ]}
      />
        <Main/>
        <Testimonials/>
      <Footer/>
    </div>
  )
}
