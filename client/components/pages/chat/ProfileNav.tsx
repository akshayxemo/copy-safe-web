"use client";
import AvatarSettingMenu from "@/components/shared/AvatarSettingMenu";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const ProfileNav = () => {
  const { data: Session } = useSession({
    required: false,
  });

  return (
    <nav className="w-full px-4 py-3 border-b border-gray-500/15 bg-purple-500/15 flex justify-end items-center gap-2">
      <div className="text-end">
        <h1 className="">{Session?.user?.name}</h1>
        <p className="text-sm">{Session?.user?.email}</p>
      </div>
      {Session && (
        <>
          {/* <Avatar className="cursor-pointer h-9 w-9 aspect-square">
            <AvatarImage src={Session.user?.image as string} alt="user-image" />
            <AvatarFallback className="bg-purple-500 text-white font-bold">
              {Session.user?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar> */}
          <AvatarSettingMenu
            name={Session.user?.name as string}
            image={Session.user?.image as string}
          />
        </>
      )}
    </nav>
  );
};

export default ProfileNav;
