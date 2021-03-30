import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <Link href="/"><a><h1>Ollie Payne</h1></a></Link>
      </div>
      <ul className={styles.navLinksList}>
        <Link href="/portfolio"><a className={styles.navLink}>Portfolio</a></Link>
        <Link href="/contact"><a className={styles.navLink}>Contact</a></Link>
      </ul>
    </nav>
  )
}

export default Navbar