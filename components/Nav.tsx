/** @jsxImportSource theme-ui */
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type NavLinkProps = { url: string, text: string }
const NavLink = ({ url, text }: NavLinkProps) => {
  return (
    <div
      sx={{
        height: '45%',
        padding: '0.5em',
        margin: '0 1em',
        ':hover': { 
          cursor: 'pointer',
        }
      }}>
      <Link href={url}>
        <a
          sx={{
            position: 'relative',
            color: 'secondary',
            fontFamily: 'body',
            fontSize: '1.25rem',
            '::before': {
              content: '""',
              width: '100%',
              height: '2px',
              position: 'absolute',
              bottom: '0',
              left: '0',
              backgroundColor: 'primary',
              transform: 'scaleX(0)',
              transition: 'all 0.3s ease-in-out 0s'
            },
            ':hover::before': {
              transform: 'scaleX(1)'
            }
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
      <Link href="/">
        <h1
          sx={{
            fontFamily: 'body',
            fontSize: '2rem',
            color: 'secondary',
            ':hover': {
              cursor: 'pointer'
            }
          }}>
          Ollie Payne
        </h1>
      </Link>
    </div>
  )
}

const Nav = () => {
  const navRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (navRef.current) {
        if (window.scrollY > 0) {
          navRef.current.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)'
        } else {
          navRef.current.style.boxShadow = 'none'
        }
      }
    })
  }, [])

  return (
    <nav
      sx={{
        maxHeight: '80px',
        position: 'fixed',
        inset: '0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        transition: 'all 0.1s ease-in'
      }}
      ref={navRef}
    >
      <NavHeader />
      <NavLinkList />
    </nav>
  )
}

export default Nav