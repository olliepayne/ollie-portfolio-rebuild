/** @jsxImportSource theme-ui */
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const NavToggle = ({ navRef }) => {
  const handleNavToggle = () => {
    navRef.current.style.height = navRef.current.style.height === '160px' ? '80px' : '160px'
  }

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
      </label>
      <input
        sx={{
          display: 'none'
        }}
        id="toggle"
        type="checkbox"
        onChange={handleNavToggle} />
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
const NavLinkList = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
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
        textAlign: 'center'
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
  const navRef = useRef(null)

  return (
    <nav
      sx={{
        height: ['80px'],
        overflow: 'hidden',
        position: 'fixed',
        inset: '0',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'secondary',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        transition: 'height 0.3s',
      }}
      ref={navRef}>
      <NavHeader />
      <NavLinkList />
      <NavToggle navRef={navRef} />
    </nav>
  )
}

export default Nav