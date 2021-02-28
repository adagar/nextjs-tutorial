import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
    <div className="logo">
      <Image width={128} height={128}src="/images/logo.png" />
    </div>
    <div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/projects"><a>Project Listing</a></Link>
    </div>
    </nav>
  )
}

export default Navbar
