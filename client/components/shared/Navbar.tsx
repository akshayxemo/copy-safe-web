'use client'
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="fixed flex gap-6 justify-between px-8 py-4 backdrop-blur-lg left-0 top-0 z-[9999] text-white w-full items-center">
      <Link href={"/home"}>
        <h3 className="text-xl">CopySafe.</h3>
      </Link>
      <div>
        <ul className="flex gap-5 items-center">
          <li className="hover:text-white text-gray-300 cursor-pointer">
            <Link href={"/home"}>Home</Link>
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer">
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            {/* TODO: Conditionally render Login button based on isAuthenticated */}
            {
              !((pathname === '/signup') || (pathname === '/signin')) &&
              (<Button className="bg-white/10 text-white hover:bg-white hover:text-black">
                <Link href={'/signin'}>Login</Link>
              </Button>)
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
