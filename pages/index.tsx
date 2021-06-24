/** @jsxImportSource theme-ui */
import Layout from '../components/Layout'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import ContentFilter from '../components/ContentFilter'

const AboutMeCard = () => {
  return (
    <div
      sx={{
        width: 'clamp(300px, 45%, 500px)',
        padding: '1em',
        margin: '0 auto',
        backgroundColor: 'teal'
      }}>
      <p>Front-End Developer</p>
    </div>
  )
}

export default function Home() {
  const filters = {
    categories: [
      'all'
    ],
    tags: [
      'Next.js',
      'HTML'
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

  const handleApplyContentFilter = () => {

  }

  return (
   <Layout title="Ollie Payne - Home">
     <PageContent
      style={{
        minHeight: '100vh',
        marginTop: '80px',
        flex: '1 auto'
      }}>
      <Card
        style={{
          width: 'clamp(300px, 45%, 500px)',
          padding: '1em',
          margin: '0 auto',
          backgroundColor: 'muted',
          borderLeft: '5px solid hsl(350, 100%, 90%)'
        }}
      >
        <p>Front-End Developer</p>
      </Card>
      <ContentFilter filters={filters} data={data} handleApplyContentFilter={handleApplyContentFilter} />
     </PageContent>
   </Layout>
  )
}