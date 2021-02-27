import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
    <div className="logo">
      {/* <h1 className="">Project List</h1> */}
      <Image width={128} height={128}src="/images/logo.png" />
    </div>
    <a>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/projects"><a>Project Listing</a></Link>
    </a>
    </nav>
  )
}

export default Navbar
