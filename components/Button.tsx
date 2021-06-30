/** @jsxImportSource theme-ui */

const Button = ({ children, width, height }) => {
  return (
    <button
      sx={{
        width,
        height,
        padding: '1em',
        border: 'none',
        borderRadius: '20%',
        backgroundColor: 'secondary',
        fontFamily: 'body',
        color: 'white',
        transition: 'all 0.3s',
        ':hover': {
          cursor: 'pointer',
          opacity: '90%'
        }
      }}
    >
      {children}
    </button>
  )
}

export default Button