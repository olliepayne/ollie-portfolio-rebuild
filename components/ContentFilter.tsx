/*
  ---------------
  |ContentFilter|
  ---------------

  Dependencies
  - TypeScript (.tsx file extension)
  - Theme UI (sx prop + theme.js file for styling)
    * fontFamily: 'body', color: 'primary', color: 'secondary' -- will refer to the theme.js file

  To Use
  - Use the 'handleApplyContentFilter' prop to pass the data back up to the respective page.
*/

/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from 'react'

type SearchProps = { data: any, handleApplyResult: (result: string) => void }
const Search = ({ data, handleApplyResult }: SearchProps) => {
  const [inputData, setInputData] = useState<string>('')

  const [results, setResults] = useState<string[]>([])

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
    const searchQuery = e.target.value
    setInputData(searchQuery)
  }

  return (
    <div
      sx={{
        width: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <input
        sx={{
          width: '100%',
          height: '2rem',
          fontFamily: 'body',
          borderRadius: '5px',
          border: '2px solid hsl(0, 0%, 60%)',
          transition: 'all 0.2s',
          ':focus': {
            outline: 'none',
            borderColor: 'hsl(0, 0%, 85%)',
            transition: 'all 0.2s'
          }
        }}
        name="tag"
        placeholder="Search tag..."
        autoComplete="off" 
        onChange={handleSearch} />
      <div
        sx={{
          width: '100%',
          maxHeight: '200px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: 'yellow'
        }}>
        {results.map((result: string) => (
          <div 
            sx={{
              width: '100%',
              height: '40px',
              backgroundColor: 'cornflowerblue',
              ':hover': {
                cursor: 'pointer'
              }
            }}
            key={'search:' + result}
            onClick={() => handleApplyResult(result)}>
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

  const handleApplyResult = (data: any) => {
    
  }

  const handleApplyCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newData = Object.assign({}, formData)
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  return (
    <form>
      <label>Category:</label>
      <select name="category" onChange={handleApplyCategory}>
        {filters.categories.map((category: string) => (
          <option key={'form:' + category} value={category}>{category}</option>
        ))}
      </select>
      <Search data={filters.tags} handleApplyResult={handleApplyResult} />
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
    <div
      sx={{
        fontFamily: 'body'
      }}>
      <Form filters={filters} handleApplyForm={handleApplyForm} />
    </div>
  )
}

export default ContentFilter