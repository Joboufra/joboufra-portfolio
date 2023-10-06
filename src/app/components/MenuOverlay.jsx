import React from 'react'
import NavLink from './NavLink'
const MenuOverlay = ({ links, onClose }) => {
  return (
    <>
    <ul className='flex flex-col py-4 items-center bg-gradient-to-t from-slate-800'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} onClose={onClose} />
        </li>
      ))}
    </ul>
    </>
  )
}


export default MenuOverlay