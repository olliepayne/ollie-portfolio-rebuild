import React, { useState } from 'react'

type FormProps = { filters: { categories: string[], tags: string[] } }
const Form = ({ filters }: FormProps) => {
  type FormData = { category: string, tag: string }
  const [formData, setFormData] = useState<FormData>({category: '', tag: '' })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const newData = Object.assign({}, formData)
    newData[e.target.name] = e.target.value
    setFormData(newData)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form>
      <label>Category:</label>
      <select name="category">
        {filters.categories.map((category: string) => (
          <option key={'form:' + category} value={category}>{category}</option>
        ))}
      </select>
      <label>Tags:</label>
      <input name="tag" list="tags" />
      <datalist id="tags">
        {filters.tags.map((tag: string) => (
          <option key={'form:' + tag} value={tag} />
        ))}
      </datalist>
    </form>
  )
}

type ContentFilterProps = { filters: { categories: string[], tags: string[] }, data: any, handleFilteredData: (data: any) => void, style: any }
const ContentFilter = ({ filters, data, style }: ContentFilterProps) => {
  type FilteredData = { data: any }
  const [filteredData, setFilteredData] = useState<FilteredData>(data)

  const handleDataFilter = (data: any) => {
    
  }

  return (
    <div style={style}>
      <Form filters={filters} />
    </div>
  )
}

export default ContentFilter