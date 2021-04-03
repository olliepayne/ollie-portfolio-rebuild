import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
  console.log(entries)

  const [formData, setFormData] = useState({ category: 'All', tag: '' })
  const [appliedCategory, setAppliedCategory] = useState("")
  const [appliedTags, setAppliedTags] = useState([])
  const [filteredEntries, setFilteredEntries] = useState(entries)

  const filterContent = (newCategory: string, newTags: string[]) => {
    let entriesCopy: typeof entries[] = entries.slice()
    entriesCopy = entriesCopy.filter(entry => {
      let isMatch: boolean = true

      if (newCategory !== 'All') {
        if (!entry.filters.categories.includes(newCategory)) {
          isMatch = false
        } else {
          if (newTags.length > 0) {
            newTags.forEach(tag => {
              if (!entry.filters.tags.includes(tag)) return isMatch = false
            })
          }
        }
      } else {
        if (newTags.length > 0) {
          newTags.forEach(tag => {
            if (!entry.filters.tags.includes(tag)) return isMatch = false
          })
        }
      }

      if (isMatch) return entry
    })
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

    const clearInput = () => {
      const newFormData = Object.assign({}, formData)
      newFormData.tag = ''
      setFormData(newFormData)
    }
    clearInput()
  }

  const handleDeleteTag = tag => {
    const arrCopy = appliedTags.slice()
    arrCopy.splice(arrCopy.indexOf(tag), 1)
    setAppliedTags(arrCopy)
    
    filterContent(appliedCategory, arrCopy)
  }

  return (
    <div className="page-container">
      <Head>
        <title>Ollie Payne | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.content}>
        <h1>Portfolio</h1>
        <div className={styles.firstRow}>
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
              <input className={styles.filterInput} list="tags" name="tag" type="text" value={formData.tag} onChange={handleFormChange} />
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
            <li key={entry.id}><Link href={`/portfolio/${entry.id}`}><a><EntryCard entry={entry} /></a></Link></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Portfolio