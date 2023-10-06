import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='bg-[#121212] py-4 text-center relative bg-opacity-95 border-t-2 border-secondary-800'>
      <div className='container mx-auto opacity-80'>
        <p className='text-sm text-white relative opacity-70'> Jose Boullosa © {new Date().getFullYear()}</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
