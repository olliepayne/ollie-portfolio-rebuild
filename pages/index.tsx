/** @jsxImportSource theme-ui */
import Layout from '../components/Layout'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import ContentFilter from '../components/ContentFilter'

export default function Home() {
  const filters = {
    categories: [
      'all',
      'support'
    ],
    tags: [
      'Next.js',
      'HTML',
      'Strapi.js',
      'TypeScript',
      'fruit',
      'fruit',
      'fruit',
      'fruit',
      'fruit',
      'fruit',
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
     <PageContent>
      <Card width='clamp(200px, 50vw, 400px)' height="200px">
        <p>Front-End Developer</p>
      </Card>
      <ContentFilter filters={filters} data={data} handleApplyContentFilter={handleApplyContentFilter} />
     </PageContent>
   </Layout>
  )
}