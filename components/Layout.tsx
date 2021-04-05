import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const handleResize = () => {
    const newData = Object.assign({}, dimensions)
    newData.width = window.innerWidth
    newData.height = window.innerHeight
    setDimensions(newData)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {dimensions.width > 480 ? <Navbar /> : <MobileNavbar />}
      {children}
      <Footer />
    </>
  )
}

export default Layout