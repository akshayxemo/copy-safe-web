"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Cloud,
  CreditCard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
  MessageSquare,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const AvatarSettingMenu = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  // Close the div when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <Avatar
        className="cursor-pointer h-9 w-9 aspect-square"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AvatarImage src={image as string} alt="user-image" />
        <AvatarFallback className="bg-purple-500 text-white font-bold">
          {name?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      {open && (
        <div
          ref={divRef}
          className="h-30 min-w-48 bg-white text-black font-sans absolute z-[10000] p-1 right-0 top-11 rounded-md flex flex-col"
        >
          <h5 className="text-base font-semibold px-1 pt-1 pb-2">My Account</h5>
          <hr />
          <div className="flex flex-col gap-1 py-1">
            <div
              className="flex justify-start items-center text-sm font-medium hover:bg-gray-500/15 py-1 h-8 px-2 rounded-sm cursor-pointer"
              onClick={() => {
                router.push(`/chat`);
              }}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Chat</span>
            </div>
            <div
              className="flex justify-start items-center text-sm font-medium hover:bg-gray-500/15 py-1 h-8 px-2 rounded-sm cursor-pointer"
              onClick={() => {
                router.push("/pricing");
              }}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </div>
            <div
              className="flex justify-start items-center text-sm font-medium hover:bg-gray-500/15 py-1 h-8 px-2 rounded-sm cursor-pointer"
              onClick={() => {
                redirect("/pricing");
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-1 pt-1">
            <div
              className="flex justify-start items-center text-sm font-medium hover:bg-gray-500/15 py-1 h-8 px-2 rounded-sm cursor-pointer"
              onClick={() => {
                signOut();
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarSettingMenu;
