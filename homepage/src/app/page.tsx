import Link from 'next/link';
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-full bg-gray-100 text-amber-600">
      <h1 className="text-4xl font-bold">Welcome to まさとも&apos;s Website!</h1>
      <div className="flex flex-row text-center mt-4">
        <Link href="https://x.com/mathatomo57" className="underline hover:text-gray-800 flex items-center gap-2">
          <FaXTwitter size={32} className="swing-hover" />
        </Link>
        <Link href="https://www.instagram.com/mathatomo57?igsh=MTFvY2Y2Ym53N250aw%3D%3D&utm_source=qr" className="underline hover:text-gray-800 flex items-center gap-2">
          <FaInstagram size={32} className="swing-hover" />
        </Link>
        <Link href="https://www.facebook.com/share/19i7QWpB64/?mibextid=wwXIfr" className="underline hover:text-gray-800 flex items-center gap-2">
          <FaFacebook size={32} className="swing-hover" />
        </Link>
        <Link href="https://www.linkedin.com/in/%E6%AD%A3%E6%9C%8B-%E8%B5%A4%E5%B7%9D-4485b2311/" className="underline hover:text-gray-800 flex items-center gap-2">
          <FaLinkedin size={32} className="swing-hover" />
        </Link>
        <Link href="https://github.com/masatomo57" className="underline hover:text-gray-800 flex items-center gap-2">
          <FaGithub size={32} className="swing-hover" />
        </Link>
      </div>
    </div>
  );
}
