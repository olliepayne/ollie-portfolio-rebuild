import styles from '../styles/EntryCard.module.css'

const EntryCard = ({ entry }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.frontContent}>
          <h4 className={styles.title}>{entry.title}</h4>
        </div>
        <div className={styles.backContent}>
          <p>{entry.preview}</p>
        </div>
      </div>
    </div>
  )
}

export default EntryCard