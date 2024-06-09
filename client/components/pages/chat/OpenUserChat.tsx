"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const OpenUserChat = () => {
  const { data: Session } = useSession({
    required: false,
  });
  console.log(Session);

  if (Session?.user?.chatId) {
    redirect(`/chat/${Session.user.chatId}`);
  }
  return <div>OpenUserChat</div>;
};

export default OpenUserChat;
