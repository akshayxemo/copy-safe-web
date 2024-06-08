import { ChatProvider } from "@/components/pages/chat/context/ChatProvider";
import { SideBar } from "@/components/pages/chat/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChatProvider>
      <section className="font-sans bg-black text-white h-full w-full flex">
        <SideBar />
        {children}
      </section>
    </ChatProvider>
  );
};

export default layout;
