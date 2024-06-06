import ProfileNav from "@/components/pages/chat/ProfileNav";
import { SideBar } from "@/components/pages/chat/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="font-sans bg-black text-white min-h-screen flex justify-between relative">
      <SideBar />
      <div className="flex flex-col relative flex-1">
        <ProfileNav />
        <div className="p-6 bg-purple-500/15 flex-1">{children}</div>
      </div>
    </section>
  );
};

export default layout;
