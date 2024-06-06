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
    <nav className="w-full min-h-16 px-4 py-3 border-b border-gray-500/15 bg-purple-500/15 flex justify-end items-center gap-3">
      <div className="text-end">
        <h1 className="">{Session?.user?.name}</h1>
        <p className="text-sm">{Session?.user?.email}</p>
      </div>
      {Session && (
        <AvatarSettingMenu
          name={Session.user?.name as string}
          image={Session.user?.image as string}
        />
      )}
    </nav>
  );
};

export default ProfileNav;
