import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <Link href="/"><a><h1>Ollie Payne Mobile</h1></a></Link>
      </div>
      <ul className={styles.navLinksList}>
        <li><Link href="/portfolio"><a className={styles.navLink}>Portfolio</a></Link></li>
        <li><Link href="/contact"><a className={styles.navLink}>Contact</a></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar