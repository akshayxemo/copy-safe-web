"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkButton from "./LinkButton";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { data: Session } = useSession({
    required: false,
  });

  // console.log(Session);
  const pathname = usePathname();

  return (
    <nav className="fixed flex gap-6 justify-between px-8 py-4 backdrop-blur-lg left-0 top-0 z-[9999] text-white w-full items-center">
      <Link href={"/home"} className="flex gap-2 items-center justify-center">
        <Image
          src={"/icons/logoi-colored.png"}
          alt="logo-color"
          width={30}
          height={30}
        />
        <h3 className="text-xl">CopySafe.</h3>
      </Link>
      <div>
        <ul className="flex gap-5 items-center">
          <li className="hover:text-white text-gray-300 cursor-pointer py-2">
            <Link href={"/home"}>Home</Link>
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer py-2">
            <Link href={"/pricing"}>Pricing</Link>
          </li>

          {/* TODO: Conditionally render Login button based on isAuthenticated */}
          {!(pathname === "/auth/signup" || pathname === "/auth/signin") && (
            <li>
              <LinkButton text="Login" link="/auth/signin" />
            </li>
          )}

          {Session?.user && (
            <li className="hover:text-white text-gray-300 cursor-pointer py-2">
              <Avatar>
                <AvatarImage
                  src={Session.user?.image as string}
                  alt="@shadcn"
                />
                <AvatarFallback>
                  {Session.user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
