import portfolioData from '../../public/portfolioData.json'

export const getStaticPaths = async() => {
  const data = portfolioData.entries

  const paths = data.map(entry => {
    return {
      params: { id: entry.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = portfolioData.entries[id]

  return {
    props: { entry: data }
  }
}

const Details = ({ entry }) => {
  return (
    <div className="page-container">
      <h1>{entry.title}</h1>
      
    </div>
  )
}

export default Details