import { useState } from 'react'
import portfolioData from '../../public/portfolioData.json'

export const getStaticProps = async () => {
    return {
      props: {
        filters: portfolioData.filters,
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

const Portfolio = ({ filters, entries }) => {
  const [appliedFilters, setAppliedFilters] = useState([String])
  const [filteredEntries, setFilteredEntries] = useState(entries)

  const applyFilter = () => {
    let entriesCopy = entries.slice()
    entriesCopy = entriesCopy.filter(entry => {
     appliedFilters.forEach(filter => {
       if(entry.filters.categories.includes(filter) || entry.filters.tags.includes(filter)) return entry
     })
    })
    console.log(entriesCopy)
  }

  return (
    <div className="page-card">
      <h1>Portfolio</h1>
      <ul>
        {filteredEntries.map(entry => (
          <li>{entry.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio