/** @jsxImportSource theme-ui */
import Link from 'next/link'

const NavHeader = () => {
  return (
    <div
      sx={{
        textAlign: 'center'
      }}
    >
      <h1>Ollie Payne</h1>
    </div>
  )
}

const NavLink = ({ targetUrl, text }) => {
  return (
    <div
      sx={{
        height: '45%',
        padding: '0.5em',
        margin: '0 1em',
        ':hover': { cursor: 'pointer', backgroundColor: 'lightgray' }
      }}
    >
      <Link href={targetUrl}>
        <a
          sx={{

          }}
        >
          {text}
        </a>
      </Link>
    </div>
  )
}

const NavLinkList = () => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <NavLink targetUrl="/portfolio" text="Portfolio" />
      <NavLink targetUrl="/contact" text="Contact" />
    </div>
  )
}

const Nav = () => {
  return (
    <nav
      sx={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <NavHeader />
      <NavLinkList />
    </nav>
  )
}

export default Nav