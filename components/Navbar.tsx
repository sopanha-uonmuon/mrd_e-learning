import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 z-50 bg-zinc-50">
        <div className="container mx-auto px-4 h-full">
          ​<Link href={'/'}>
            <Image className='logo' src="/logo.png" width={100} height={0} alt="Picture of the author" />
          </Link>
         
           
        <div className='menu-container'>
            <div className="menu-wrapper">
                <ul className="menu-lists">
                <li>
                    <Link href="/">
                    <p className='testFont'>វគ្គសិស្សាថ្មី</p>
                    </Link>
                </li>
                <li>
                    <Link href="/lesson_minister">
                    <p>វគ្គសិស្សាតាមនាយកដ្ធាន</p>
                    </Link>
                </li>
                <li>
                    <Link href="/lesson_categories">
                    <p>វគ្គសិស្សាតាមប្រភេទ</p>
                    </Link>
                </li>
                </ul>
            </div>
            <Image className='icon_ham' src="/icon_ham.png" width={100} height={0} alt="Picture of the author" />
        </div>
          
          
        </div>
      </div>
    </>
  )
}

export default Navbar