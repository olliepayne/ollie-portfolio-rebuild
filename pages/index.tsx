/** @jsxImportSource theme-ui */
import Layout from '../components/Layout'
import PageContent from '../components/PageContent'
import ContentFilter from '../components/ContentFilter'

const AboutMeCard = () => {
  return (
    <div
      sx={{
        width: 'clamp(200px, 45%, 400px)',
        padding: '1em',
        margin: '0 auto',
        backgroundColor: 'teal'
      }}>
      <p>Front-End Developer</p>
    </div>
  )
}

export default function Home() {
  const pageStyle = {
    minHeight: '100vh',
    marginTop: '80px',
    flex: '1 auto'
  }

  const contentFilterStyle = {

  }

  const filters = {
    categories: [
      'all'
    ],
    tags: [
      'Next.js'
    ]
  }

  const data = [
    {
      filters: {
        category: 'all',
        tags: [
          'React.js'
        ]
      }
    }
  ]

  const handleFilteredData = () => {

  }

  return (
   <Layout title="Ollie Payne - Home">
     <PageContent style={pageStyle}>
      <AboutMeCard />
      <ContentFilter filters={filters} data={data} handleFilteredData={handleFilteredData} style={contentFilterStyle} />
     </PageContent>
   </Layout>
  )
}
