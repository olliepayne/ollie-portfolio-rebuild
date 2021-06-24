import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

type LayoutProps = { children?: any, title: string }
const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout