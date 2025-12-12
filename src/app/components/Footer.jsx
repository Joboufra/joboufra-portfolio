import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='relative bg-[#05080f]/80 py-6 text-center backdrop-blur-lg border-t border-white/10'>
      <div className='container mx-auto opacity-90'>
        <p className='text-sm text-white/70'>Jose Boullosa | {new Date().getFullYear()}</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
