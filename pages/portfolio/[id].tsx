import Image from 'next/image'
import styles from '../../styles/PortfolioDetails.module.css'
import portfolioData from '../../public/portfolioData.json'

export const getStaticPaths = async() => {
  const data = portfolioData.entries

  const paths = data.map(entry => {
    return {
      params: { id: entry.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = portfolioData.entries[id]

  return {
    props: { entry: data }
  }
}

const Details = ({ entry }) => {
  return (
    <div className="page-container">
      <div className={styles.content}>
        <h1>{entry.title}</h1>
        <div className={styles.firstRow}>
          <p className={styles.description}>{entry.description}</p>
          <Image className={styles.thumbnail} src={entry.thumbnailURL} width={320} height={180} />
        </div>
        <div className={styles.secondRow}>
          <div className={styles.linksContainer}>
            <a href={entry.links.deployment} target="blank">Deployment</a>
            <a href={entry.links.github} target="blank">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details