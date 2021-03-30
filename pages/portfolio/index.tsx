import portfolioData from '../../public/portfolioData.json'

export const getStaticProps = async () => {
    return {
      props: {
        categories: portfolioData.filters.categories,
        tags: portfolioData.filters.tags,
        entries: portfolioData.entries
      }
    }
}

const EntryCard = () => {
  return (
    <div>
      
    </div>
  )
}

const Portfolio = ({ categories, tags, entries }) => {
  return (
    <div className="page-card">
      <h1>Portfolio</h1>
    </div>
  )
}

export default Portfolio