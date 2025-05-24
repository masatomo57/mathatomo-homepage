import Link from 'next/link';
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa6';
import ImageClip from '../components/ImageClip';

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-full bg-gray-100 text-amber-600">
      <div className="my-6">
        <ImageClip src="/masatomo_2.jpeg" alt="まさともと宮島の鹿" shape="circle" size={240} />
      </div>
      <h1 className="text-4xl font-bold">Welcome to まさとも&apos;s Website!</h1>
      <div className="flex flex-row text-center mt-4 gap-4">
        <Link href="https://x.com/mathatomo57" className="underline hover:text-gray-800 flex items-center">
          <FaXTwitter size={32} className="swing-hover" />
        </Link>
        <Link href="https://www.instagram.com/mathatomo57?igsh=MTFvY2Y2Ym53N250aw%3D%3D&utm_source=qr" className="underline hover:text-gray-800 flex items-center">
          <FaInstagram size={32} className="swing-hover" />
        </Link>
        <Link href="https://www.facebook.com/share/19i7QWpB64/?mibextid=wwXIfr" className="underline hover:text-gray-800 flex items-center">
          <FaFacebook size={32} className="swing-hover" />
        </Link>
        <Link href="https://www.linkedin.com/in/%E6%AD%A3%E6%9C%8B-%E8%B5%A4%E5%B7%9D-4485b2311/" className="underline hover:text-gray-800 flex items-center">
          <FaLinkedin size={32} className="swing-hover" />
        </Link>
        <Link href="https://github.com/masatomo57" className="underline hover:text-gray-800 flex items-center">
          <FaGithub size={32} className="swing-hover" />
        </Link>
      </div>
    </div>
  );
}
