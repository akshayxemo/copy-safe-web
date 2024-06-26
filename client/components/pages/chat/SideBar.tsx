import Image from "next/image";
export const SideBar = () => {
  return (
    <div className="min-h-full p-6 max-w-72 bg-purple-500/10 backdrop-blur-xl flex-1 flex flex-col gap-8 items-start overflow-y-auto relative">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/icons/logoi-colored.png"}
            alt="logo-color"
            width={30}
            height={30}
          />
          <h1 className="text-xl">CopySafe.</h1>
        </div>
        <span className="material-symbols-outlined text-white p-2 bg-white/5 rounded-md">
          add_circle
        </span>
      </div>

      <div className="w-full">
        <p className="mb-3 text-sm">yesterday</p>
        <ul className="grid grid-cols-1 gap-3">
          <li className="px-4 py-2 rounded-md bg-white/5 cursor-pointer">
            <p>Chat 1</p>
          </li>
          <li className="px-4 py-2 rounded-md bg-white/5 cursor-pointer">
            <p>Chat 2</p>
          </li>
        </ul>
      </div>

      <div className="w-full">
        <p className="mb-3 text-sm">previous 7 days</p>
        <ul className="grid grid-cols-1 gap-3">
          <li className="px-4 py-2 rounded-md bg-white/5 cursor-pointer">
            <p>Chat 1</p>
          </li>
          <li className="px-4 py-2 rounded-md bg-white/5 cursor-pointer">
            <p>Chat 2</p>
          </li>
          <li className="px-4 py-2 rounded-md bg-white/5 cursor-pointer">
            <p>Chat 3</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
