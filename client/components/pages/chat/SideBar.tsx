"use client";
import Image from "next/image";
import { useChatContext } from "./context/ChatProvider";
import { CircleX, CloudUpload, X } from "lucide-react";
export const SideBar = () => {
  const { imageString, setImageString, setText, handleRefDivClick } =
    useChatContext();
  return (
    <div className="h-screen p-6 max-w-80 bg-purple-500/10 backdrop-blur-xl flex-1 flex flex-col gap-8 items-start overflow-y-auto sticky top-0 left-0 z-[99999]">
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
      </div>

      {imageString ? (
        <div className="w-full h-auto">
          <h4 className="mb-2">Image preview</h4>
          <div className="w-full h-auto relative">
            <Image
              src={imageString}
              alt="show-upload-image"
              className="object-cover w-full h-auto rounded-md"
              width={200}
              height={300}
            />
            <span
              className="cursor-pointer absolute top-1 right-1 p-1 rounded-full bg-gray-500 text-white hover:bg-black"
              onClick={() => {
                setImageString(null);
                setText("");
              }}
            >
              <X className="w-5 h-5" />
            </span>
          </div>
        </div>
      ) : (
        <div
          className="cursor-pointer border-dashed border border-white/20 rounded-md mt-4 w-full aspect-video p-4 flex flex-col items-center justify-center gap-2 text-gray-500"
          onClick={handleRefDivClick}
        >
          <CloudUpload className="h-10 w-10" />
          <span>Click here to choose an image</span>
        </div>
      )}
      {/* <div className="w-full">
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
      </div> */}
    </div>
  );
};
