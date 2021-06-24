/** @jsxImportSource theme-ui */

type PageContentProps = { children?: any, style: any }
const PageContent = ({ children, style }: PageContentProps) => {
  return (
    <main sx={style}>
      {children}
    </main>
  )
}

export default PageContent