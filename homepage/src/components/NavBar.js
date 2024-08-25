import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link href="/profile" className="text-white">Profile</Link>
        </li>
        <li>
          <Link href="/favorite" className="text-white">Favorite</Link>
        </li>
        <li>
          <Link href="/article" className="text-white">Article</Link>
        </li>
        <li>
          <Link href="/blog" className="text-white">Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
