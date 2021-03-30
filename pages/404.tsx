import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotFound = () => {
  const router = useRouter()

  const redirectDelay = 3
  const [countdown, setCountdown] = useState(redirectDelay)

  const handleRedirect = () => {
    let newVal = countdown
    setInterval(() => {
      if (newVal === 1) {
        router.push('/')
      }

      newVal--
      setCountdown(newVal)
    }, 1000)
  }

  const endRedirect = () => {
    clearInterval()
  }

  useEffect(() => {
    handleRedirect()

    return function cleanup() {
      endRedirect()
    }
  }, [])

  return (
    <div className="page-card">
      <div className="content">
        <style jsx>
          {`
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .home-link {
            color: cornflowerblue;
            font-weight: bold;
            text-decoration: underline;
          }
        `}
        </style>
        <h1>No Ollie Here...</h1>
        <p>Go back to the <Link href="/"><a className="home-link">Homepage</a></Link></p>
        <p>Redirecting in {countdown}...</p>
      </div>
    </div>
  )
}

export default NotFound