/** @jsxImportSource theme-ui */
import Link from 'next/link'

const NavHeader = () => {
  return (
    <div
      sx={{
        textAlign: 'center',
      }}
    >
      <h1 
        sx={{ 
          fontSize: '2rem', 
          color: 'secondary' 
        }}>
        Ollie Payne
      </h1>
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

          }}>
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
      }}>
      <NavLink url="/portfolio" text="Portfolio" />
      <NavLink url="/contact" text="Contact" />
    </div>
  )
}

const Nav = () => {
  return (
    <nav
      sx={{
        maxHeight: '80px',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'secondary',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
      }}>
      <NavHeader />
      <NavLinkList />
    </nav>
  )
}

export default Nav