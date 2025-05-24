import Link from 'next/link'
import { CgHome, CgProfile, CgBulb, CgAlbum  } from 'react-icons/cg'

export default function NavBar() {
  return (
    <nav className={`bg-gray-800 p-4`}>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white items-center">
            <CgHome size={24} className="inline-block mr-1" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="text-white items-center">
            <CgProfile size={24} className="inline-block mr-1" />
            Profile
          </Link>
        </li>
        <li>
          <Link href="/product" className="text-white items-center">
            <CgBulb size={24} className="inline-block mr-1" />
            Product
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-white items-center">
            <CgAlbum size={24} className="inline-block mr-1" />
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
