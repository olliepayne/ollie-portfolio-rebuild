/** @jsxImportSource theme-ui */

type CardProps = { children?: any, style: any }
const Card = ({ children, style }: CardProps) => {
  return (
    <div sx={style}>
      {children}
    </div>
  )
}

export default Card