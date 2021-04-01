import styles from '../styles/Tag.module.css'

const Tag = (props) => {
  const { tag, deleteTag } = props

  return (
    <div className={styles.tagContainer}>
      <div className={styles.tagContent}>
        <button className={styles.deleteTagBtn} onClick={() => deleteTag(tag)}>X</button>
        <p>{tag}</p>
      </div>
    </div>
  )
}

export default Tag