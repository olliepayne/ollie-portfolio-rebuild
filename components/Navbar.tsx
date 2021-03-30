import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <div className={styles.title}>
        <h1>Ollie Payne</h1>
      </div>
      <ul>
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </ul>
    </nav>
  )
}

export default Navbar