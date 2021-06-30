import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
import React from 'react'

type LayoutProps = { children?: any, title: string }
const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout