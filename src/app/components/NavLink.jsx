import Link from "next/link"

const NavLink = ({ href, title, extraClass, onClose }) => {
  return (
    <div onClick={onClose} className={`block py-2 px-2 text-[#ADB7BE] md:text-base font-bold rounded hover:text-white ${extraClass}`}>
      <Link href={href}>
        {title}
      </Link>
    </div>
  )
}


export default NavLink;
