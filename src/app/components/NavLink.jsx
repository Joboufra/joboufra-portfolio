import Link from "next/link"

const NavLink = ({ href, title, extraClass }) => {
  return (
    <Link 
      href={href} 
      className={`block py-2 px-2 text-[#ADB7BE] md:text-base font-bold rounded hover:text-white ${extraClass}`} 
    >
       {title}
    </Link>
  )
}

export default NavLink;
