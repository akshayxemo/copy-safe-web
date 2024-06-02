import { SideBar } from "@/components/pages/chat/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="font-sans bg-black text-white min-h-screen flex justify-between relative">
      <SideBar />
      <div className="flex-1 p-6 relative">
        <div className="bg-footer-pattern absolute w-full h-full left-0 bottom-0"></div>
        {children}
      </div>
    </section>
  );
};

export default layout;
