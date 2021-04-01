import styles from '../styles/EntryCard.module.css'

const EntryCard = (props) => {
  const { entry } = props

  return (
    <div className={styles.entryCardContainer}>
      <div className={styles.entryCardContent}>
        <h4>{entry.title}</h4>
      </div>
    </div>
  )
}

export default EntryCard