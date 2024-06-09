"use client";
import AvatarSettingMenu from "@/components/shared/AvatarSettingMenu";
import { useSession } from "next-auth/react";

const ProfileNav = () => {
  const { data: Session } = useSession({
    required: false,
  });

  console.log(Session);
  return (
    <nav className="w-full min-h-16 px-4 py-3 border-b border-gray-500/15 bg-[#190d25] flex justify-end items-center gap-3 sticky top-0 right-0 z-[9999]">
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
