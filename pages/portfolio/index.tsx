import { useState } from 'react'
import styles from '../../styles/Portfolio.module.css'
import Tag from '../../components/Tag'
import EntryCard from '../../components/EntryCard'
import portfolioData from '../../public/portfolioData.json'

export const getStaticProps = async () => {
  return {
    props: {
      filters: portfolioData.filters,
      entries: portfolioData.entries
    }
  }
}

const Portfolio = ({ filters, entries }) => {
  const [formData, setFormData] = useState({ category: 'All', tag: '' })
  const [appliedCategory, setAppliedCategory] = useState("")
  const [appliedTags, setAppliedTags] = useState([])
  const [filteredEntries, setFilteredEntries] = useState(entries)

  const filterContent = (newCategory: string, newTags: string[]) => {
    console.log(newCategory, newTags)

    let entriesCopy: typeof entries[] = entries.slice()
    entriesCopy = entriesCopy.filter(entry => {
      let isMatch: boolean = false

      if (newCategory !== 'All') {
        if (entry.filters.categories.includes(newCategory)) {
          if (newTags.length > 0) {
            newTags.forEach(tag => {
              if (entry.filters.tags.includes(tag)) return isMatch = true
            })
          } else {
            isMatch = true
          }
        }
      } else {
        if (newTags.length > 0) {
          newTags.forEach(tag => {
            if (entry.filters.tags.includes(tag)) return isMatch = true
          })
        } else {
          isMatch = true
        }
      }

      if (isMatch) return entry
    })
    console.log(entriesCopy)
    setFilteredEntries(entriesCopy)
  }

  const handleFormChange = e => {
    const newData = Object.assign({}, formData)
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const applyFilters = e => {
    e.preventDefault()

    const newCategory: string = formData.category
    setAppliedCategory(newCategory)

    const newTags: string[] = appliedTags.slice()
    if (formData.tag !== "") {
      newTags.push(formData.tag)
      setAppliedTags(newTags)
    }

    filterContent(newCategory, newTags)
  }

  const handleDeleteTag = (tag) => {
    const arrCopy = appliedTags.slice()
    arrCopy.splice(arrCopy.indexOf(tag), 1)
    setAppliedTags(arrCopy)

    filterContent(appliedCategory, arrCopy)
  }

  return (
    <div className="page-card">
      <div className={styles.content}>
        <div className={styles.firstRow}>
          <h1>Portfolio</h1>
          <form className={styles.filterForm} onSubmit={applyFilters}>
            <div className={styles.filterFormEntry}>
              <label>Category:</label>
              <select name="category" onChange={handleFormChange}>
                {filters.categories.map(category => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className={styles.filterFormEntry}>
              <label>Enter Tag:</label>
              <input className={styles.filterInput} list="tags" name="tag" type="text" onChange={handleFormChange} />
              <datalist id="tags">
                  {filters.tags.map(tag => (
                    <option key={tag} value={tag} />
                  ))}
              </datalist>
            </div>
            <div className={styles.filterFormEntry}>
              <button className={styles.applyButton}>Apply</button>
            </div>
          </form>
          <div className={styles.tagListContainer}>
            <h4>Tags:</h4>
            <ul className={styles.tagList}>
              {appliedTags.map(tag => (
                <li key={tag}><Tag tag={tag} deleteTag={handleDeleteTag} /></li>
              ))}
            </ul>
          </div>
        </div>
        <ul className={styles.entryCardList}>
          {filteredEntries.map(entry => (
            <li key={entry.id}><EntryCard entry={entry} /></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Portfolio