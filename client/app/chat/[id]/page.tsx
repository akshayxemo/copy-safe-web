"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Response from "@/components/pages/chat/Response";
import { useChatContext } from "@/components/pages/chat/context/ChatProvider";
import ChatSkeleton from "@/components/pages/chat/ChatSkeleton";

const page = ({ params }: { params: { id: string } }) => {
  const { chats, setChats, lastMessageRef, scrollToLastChat, reqLoding } =
    useChatContext();

  const getChats = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_BASE}/chat/find/${params.id}`
      );
      console.log("data", data);
      setChats(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    scrollToLastChat();
  }, [chats]);

  return (
    <div
      className="flex h-full flex-col items-center justify-center overflow-y-auto"
      // ref={chatContainerRef}
    >
      <div className="w-full h-full">
        {chats.length !== 0 ? (
          chats.map((chat, index) => {
            return (
              <div
                className="w-full grid grid-cols-1 gap-6 mb-6 last:mb-0"
                id="chats"
                key={index}
              >
                <div className="p-4 bg-purple-500/10 rounded-lg min-h-8 max-w-[80%] min-w-[30%] col-span-1 justify-self-end">
                  {chat.message}
                </div>
                <div className="p-2 bg-transparent rounded-lg min-h-8 max-w-[80%] min-w-[30%] col-span-1 justify-self-start grid grid-cols-1 gap-4">
                  {chat.response?.length ? (
                    chat.response.map((el, index) => {
                      return <Response el={el} index={index} />;
                    })
                  ) : reqLoding && chat.response == null ? (
                    <ChatSkeleton />
                  ) : (
                    <div className="col-span-2">
                      Sorry! No response genrated by server
                    </div>
                  )}
                </div>
                {index === chats.length - 1 && <div ref={lastMessageRef}></div>}
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-4xl">Hi, How can i help you?</h1>
            <p className="w-[50%] text-center">
              Please only insert the abstract of your article or choose to
              import an image containing text.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
