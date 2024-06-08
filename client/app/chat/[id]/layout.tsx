import ChatBox from "@/components/pages/chat/ChatBox";
import ProfileNav from "@/components/pages/chat/ProfileNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 relative bg-purple-500/15 flex flex-col justify-between">
      <ProfileNav />
      <div className="w-[80%] mx-auto relative py-6 px-8 overflow-y-auto">
        {children}
      </div>
      <ChatBox />
    </div>
  );
};

export default layout;
