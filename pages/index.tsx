/** @jsxImportSource theme-ui */
import Layout from '../components/Layout'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import ContentFilter from '../components/ContentFilter'
import Button from '../components/Button'

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
      <Button width="100px" height="40px">Try Me</Button>
      <ContentFilter filters={filters} data={data} handleApplyContentFilter={handleApplyContentFilter} />
     </PageContent>
   </Layout>
  )
}