/*
  ---------------
  |ContentFilter|
  ---------------

  Dependencies
  - TypeScript (.tsx file extension)
  - Theme UI (sx prop for styling)

  To Use
  - Use the 'handleFiltering' prop to pass the data back up to the respective page.
*/

/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from 'react'

type SearchProps = { data: any, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
const Search = ({ data, handleChange }: SearchProps) => {
  const [inputData, setInputData] = useState<string>('')

  const [results, setResults] = useState<string[]>([])

  const fillInput = () => {

  }

  const handleResultFiltering = () => {
    const isValidResult = (result: string) => {
      const inputDataLower = inputData.toLowerCase()
      const resultLower = result.toLowerCase()

      if (inputData.length > 0) {
        for (let i = 0; i < inputData.length; i++) {
          if (inputDataLower[i] !== resultLower[i]) {
            return false
          }
        }
      } else {
        return false
      }

      return true
    }

    let newResults = data.slice()
    newResults = newResults.filter((result: string) => isValidResult(result))
    setResults(newResults)
  }
  useEffect(handleResultFiltering, [inputData])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('test')

    const searchQuery = e.target.value
    setInputData(searchQuery)

    handleChange(e)
  }

  return (
    <div>
      <input name="tag" autoComplete="off" onChange={handleSearch} />
      <div>
        {results.map((result: string) => (
          <div 
            sx={{
              width: '100px',
              backgroundColor: 'cornflowerblue'
            }}
            key={'search:' + result}>
            <p>{result}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

type FormProps = { filters: { categories: string[], tags: string[] }, handleApplyForm: (data: any) => void }
const Form = ({ filters, handleApplyForm }: FormProps) => {
  type FormData = { category: string, tag: string }
  const [formData, setFormData] = useState<FormData>({category: '', tag: '' })

  const [filteredTags, setFilteredTags] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const newData = Object.assign({}, formData)
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleApplySearch = (data: any) => {

  }

  const handleTagFiltering = () => {

  }
  useEffect(handleTagFiltering, [filteredTags])

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    // handleApplyForm(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Category:</label>
      <select name="category" onChange={handleChange}>
        {filters.categories.map((category: string) => (
          <option key={'form:' + category} value={category}>{category}</option>
        ))}
      </select>
      <label>Tags:</label>
      <Search data={filters.tags} handleChange={handleChange} />
      <button
        sx={{
          ':hover': {
            cursor: 'pointer'
          }
        }}>
        Apply
      </button>
    </form>
  )
}

type ContentFilterProps = { filters: { categories: string[], tags: string[] }, data: any, handleApplyContentFilter: (data: any) => void }
const ContentFilter = ({ filters, data, handleApplyContentFilter }: ContentFilterProps) => {
  type FilteredData = { data: any }
  const [filteredData, setFilteredData] = useState<FilteredData>(data)

  const handleApplyForm = (data: any) => {
    
  }

  return (
    <div>
      <Form filters={filters} handleApplyForm={handleApplyForm} />
    </div>
  )
}

export default ContentFilter