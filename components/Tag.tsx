import { useState } from 'react'
import styles from '../styles/Tag.module.css'

const Tag = (props) => {
  const { tag, deleteTag } = props

  const [showDelete, setShowDelete] = useState(false)

  const handleShowDelete = () => {
    setShowDelete(!showDelete)
  }

  return (
    <div className={styles.tagContainer} onMouseEnter={handleShowDelete} onMouseLeave={handleShowDelete}>
      {showDelete ? <button className={styles.deleteTagBtn} onClick={() => deleteTag(tag)}>X</button> : null}
      <p>{tag}</p>
    </div>
  )
}

export default Tag