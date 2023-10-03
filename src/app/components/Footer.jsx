import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-10 flex justify-between'>
        <span className='flex justify-center'>
        <Image
           src="/images/joboufra-es-transparent.png"
           width={100}
           height={100}
           className='hidden sm:block'
          />
        </span>
        <p className='text-slate-500' > Jose Boullosa @ 2023 </p >
      </div>
    </footer>
  )
}

export default Footer