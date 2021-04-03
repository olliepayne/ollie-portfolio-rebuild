const Footer = () => {
  return (
    <footer>
      <style jsx>
        {`
          footer {
            font-style: italic;
            text-align: center;
          }

          .github-link {
            color: cornflowerblue;
            font-weight: bold;
          }
        `}
      </style>
      <p>Made with Next.js, checkout the <a className="github-link" href="/https://github.com/olliepayne/ollie-portfolio-rebuild" target="blank">Github repo</a></p>
    </footer>
  )
}

export default Footer