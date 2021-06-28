/** @jsxImportSource theme-ui */
import useMergeStyle from '../hooks/useMergeStyle'

type PageContentProps = { children?: any, style?: any }
const PageContent = ({ children, style }: PageContentProps) => {
  let defaultStyle = {
    minHeight: '100vh',
    marginTop: '80px',
    flex: '1 auto'
  }
  
  defaultStyle = useMergeStyle(defaultStyle, style)

  return (
    <main sx={defaultStyle}>
      {children}
    </main>
  )
}

export default PageContent