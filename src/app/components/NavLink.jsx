import Link from "next/link"

const NavLink = ({ href, title, extraClass }) => {
  return (
    <Link 
      href={href} 
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] md:text-base font-bold rounded hover:text-white ${extraClass}`} 
    >
       {title}
    </Link>
  )
}

export default NavLink;
