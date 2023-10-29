import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import img from "@/public/banner.jpg"
const main = () => {

  return (
    <>
    <Link href="Home" className='mainpageui'> main page</Link>
    <Image
    src={img}
    fill
    loading='lazy'/>
    </>
  )
}

export default main;