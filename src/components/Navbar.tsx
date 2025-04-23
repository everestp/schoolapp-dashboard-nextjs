import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4  '>
        {/* SEARch Bar */}
        <div className='hiddem md:flex'>
<Image src='/search.png'>
        </div>
        
        Navbar</div>
  )
}

export default Navbar