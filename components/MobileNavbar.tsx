import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/MobileNavbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.top}>
        <Link href="/"><a className={styles.title}><h1>Ollie Payne Mobile</h1></a></Link>
        <p className={styles.openBtn} onClick={handleOpen}>{isOpen ? '[collapse]' : '[expand]' }</p>
      </div>
      {isOpen &&
        <ul className={styles.navLinksList}>
          <li className={styles.navListItem}><Link href="/portfolio"><a className={styles.navLink}>Portfolio</a></Link></li>
          <li className={styles.navListItem}><Link href="/contact"><a className={styles.navLink}>Contact</a></Link></li>
        </ul>
      }
    </nav>
  )
}

export default Navbar