/** @jsxImportSource theme-ui */
import { useState } from 'react'
import Link from 'next/link'

type NavToggleProps = { handleNavToggle: Function }
const NavToggle = ({ handleNavToggle }: NavToggleProps) => {
  return (
    <div
      sx={{
        width: '30px',
        display: ['none', 'block']
      }}>
      <label
        sx={{
          margin: '0 auto',
          fontSize: '30px',
          color: 'white',
          ':hover': {
            cursor: 'pointer'
          }
        }}
        htmlFor="toggle">
        &#9776;
        onClick={handleNavToggle}
      </label>
      <input
        sx={{
          display: 'none'
        }}
        id="toggle"
        type="checkbox" />
    </div>
  )
}

type NavLinkProps = { url: string, text: string }
const NavLink = ({ url, text }: NavLinkProps) => {
  return (
    <div
      sx={{
        height: '45%',
        padding: '0.5em',
        margin: '0 1em',
        ':hover': { cursor: 'pointer', backgroundColor: 'lightgray' }
      }}>
      <Link href={url}>
        <a
          sx={{
            color: 'white'
          }}>
          {text}
        </a>
      </Link>
    </div>
  )
}

type NavLinkListProps = { isMobile: boolean }
const NavLinkList = ({ isMobile }: NavLinkListProps) => {
  return (
    <div
      sx={{
        display: isMobile ? 'flex': ['flex', 'none'],
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <NavLink url="/portfolio" text="Portfolio" />
      <NavLink url="/contact" text="Contact" />
    </div>
  )
}

const NavHeader = () => {
  return (
    <div
      sx={{
        textAlign: 'center',
      }}
    >
      <h1
        sx={{
          fontFamily: 'body',
          fontSize: '2rem',
          color: 'white'
        }}>
        Ollie Payne
      </h1>
    </div>
  )
}

const Nav = () => {
  const [isMobile, setIsMobile] = useState<boolean>()
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const handleNavToggle = () => {
    setIsToggled(!isToggled)
    setIsMobile(!isMobile)
  }

  return (
    <nav
      sx={{
        maxHeight: '80px',
        position: 'fixed',
        inset: '0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'secondary',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
      }}>
      <NavHeader />
      <NavLinkList isMobile={isMobile} />
      <NavToggle handleNavToggle={handleNavToggle} />
    </nav>
  )
}

export default Nav