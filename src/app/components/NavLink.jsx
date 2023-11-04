import Link from "next/link"

const NavLink = ({ href, title, extraClass, onClose }) => {
  return (
    <div onClick={onClose} className={`block py-2 px-2 text-[#ADB7BE] uppercase text-xs font-semibold rounded hover:text-white ${extraClass}`}>
      <Link href={href}>
        {title}
      </Link>
    </div>
  )
}


export default NavLink;
