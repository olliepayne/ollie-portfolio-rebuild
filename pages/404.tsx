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
      if(newVal === 1) {
        router.push('/')
      }

      newVal--
      setCountdown(newVal)
    }, 1000)
  }

  useEffect(() => {
    handleRedirect()
  }, [])

  return (
    <div>
      <h1>No Ollie Here...</h1>
      <h2>Go back to the <Link href="/"><a>Homepage</a></Link></h2>
      <p>Redirecting in {countdown}...</p>
    </div>
  )
}

export default NotFound