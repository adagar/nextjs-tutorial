import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1); // Take them back one page
      router.push('/'); // redirect to the homepage
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <h2>That page cannot be found</h2>
      <p>Return to the <Link href="/"><a>Homepage</a></Link> if you're not automatically redirected</p>
    </div>
  )
}

export default NotFound
