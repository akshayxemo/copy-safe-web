import { Input } from "@/components/ui/input";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[80%] h-full flex flex-col justify-center items-center gap-4 mx-auto">
      <div className="flex-1 w-full overflow-y-auto">{children}</div>
      <Input
        type="text"
        name="chat"
        className="bg-white/5 border-none py-6 placeholder:text-white/30 px-4 w-full justify-self-end"
        placeholder="type here"
      />
    </div>
  );
};

export default layout;
