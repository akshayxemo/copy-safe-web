import Image from "next/image";

import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const ChatPage = async () => {
  const Session: any = await getServerSession(options);

  if (Session?.user?.chatId) {
    redirect(`/chat/${Session.user.chatId}`);
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="flex-1 flex flex-col justify-center items-center">
        <Image
          src={"/icons/logoi.png"}
          alt="logo"
          width={60}
          height={60}
          className="mb-4"
        />
        <h1 className="text-4xl">CopySafe.</h1>
        <p>Lets get started with your checking.</p>
      </div>
    </div>
  );
};

export default ChatPage;
