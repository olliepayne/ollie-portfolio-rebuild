/** @jsxImportSource theme-ui */

type CardProps = { children?: any, width?: string, height?: string, padding?: string, margin?: any, style?: any }
const Card = ({ children, width, height, padding, margin, style }: CardProps) => {
  const defaultStyle = {
    width,
    height,
    padding,
    margin,
    backgroundColor: 'hsl(60, 0%, 95%)',
  }

  return (
    <div sx={style ? style : defaultStyle}>
      {children}
    </div>
  )
}

export default Card