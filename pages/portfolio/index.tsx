import { useState } from 'react'
import styles from '../../styles/Portfolio.module.css'
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
  const [formData, setFormData] = useState({ filter: "" })
  const [appliedFilters, setAppliedFilters] = useState([])
  const [filteredEntries, setFilteredEntries] = useState(entries)

  const filterContent = (newFilters: string[]) => {
    let entriesCopy: typeof entries[] = entries.slice()
    entriesCopy = entriesCopy.filter(entry => {
      let isMatch: boolean = false
      newFilters.forEach(filter => {
        if (entry.filters.categories.includes(filter) || entry.filters.tags.includes(filter)) return (isMatch = true)
      })

      if(isMatch) return entry
    })
    console.log(entriesCopy)
  }

  const handleFormChange = e => {
    const newData = Object.assign({}, formData)
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const applyFilter = e => {
    e.preventDefault()

    const newData: string[] = appliedFilters.slice()
    newData.push(formData.filter)
    setAppliedFilters(newData)

    filterContent(newData)
  }

  return (
    <div className="page-card">
      <div className={styles.content}>
        <div className={styles.firstRow}>
          <h1>Portfolio</h1>
          <form className={styles.filterForm} onSubmit={applyFilter}>
            <input className={styles.filterInput} name="filter" type="text" placeholder="Enter filter..." onChange={handleFormChange} />
            <button className={styles.applyButton}>Apply</button>
          </form>
        </div>
        <ul>
          {filteredEntries.map(entry => (
            <li key={entry.id}>{entry.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Portfolio