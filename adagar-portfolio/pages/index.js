import Head from 'next/head'
import Link from 'next/link';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Project List | Home</title>
      <meta keywords="art adagar next projects" />
    </Head>
    <div className={styles.title}>
      <h1 className={styles.text}>Homepage</h1>
      <p className={styles.text}>Anim esse aliqua reprehenderit officia sunt Lorem minim ea amet minim id enim. Sit sit do ex officia et quis reprehenderit. Nulla laboris ea sunt quis. Duis quis ut aliquip et laboris voluptate ad veniam incididunt. Et minim aliquip exercitation ea ullamco ipsum elit tempor qui irure. Deserunt fugiat in magna amet nulla commodo pariatur et eiusmod cillum eiusmod consequat qui aliqua. Sint laborum proident ad incididunt Lorem esse sint.</p>
      <Link href="/projects" className={styles.btn}><a className={styles.btn}>
          See Some Art!
        </a></Link>
    </div>
    </>
  )
}
