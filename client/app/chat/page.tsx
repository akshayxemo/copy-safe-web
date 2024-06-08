import CreateChatBtn from "@/components/pages/chat/CreateChatBtn";
import Image from "next/image";

const ChatPage = () => {
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
        <CreateChatBtn />
      </div>
    </div>
  );
};

export default ChatPage;
