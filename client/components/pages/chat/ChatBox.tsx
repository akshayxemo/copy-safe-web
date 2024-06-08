"use client";
import React, { useEffect, useRef } from "react";
import { useChatContext } from "./context/ChatProvider";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus, LoaderCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

const ChatBox = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const {
    handleImageUpload,
    loadingImage,
    text,
    setText,
    imageRef,
    handleRefDivClick,
  } = useChatContext();

  useEffect(() => {
    const handleResize = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", handleResize);
      handleResize(); // Initial resize on mount
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener("input", handleResize);
      }
    };
  }, [text]);
  return (
    <div className="flex w-full sticky bottom-0 left-0 justify-center py-5 px-5 bg-[#190d25]">
      <Input
        id="picture"
        accept="image/jpeg, image/jpg, image/png"
        ref={imageRef}
        type="file"
        className="hidden"
        onChange={handleImageUpload}
      />
      <div className="w-[80%] bg-[#271538] flex gap-1.5 justify-center items-end py-3 px-5 rounded-md cursor-pointer">
        <div className="py-2" onClick={handleRefDivClick}>
          {!loadingImage ? (
            <ImagePlus />
          ) : (
            <LoaderCircle className="animate-spin" />
          )}
        </div>
        <Textarea
          ref={textareaRef}
          rows={1}
          className="bg-transparent py-2 border-none placeholder:text-white/30 px-4 w-full h-auto resize-none overflow-y-auto"
          placeholder="Paste or type your article abstract here."
          style={{ minHeight: "2rem", maxHeight: "13rem" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loadingImage}
        />
        <button
          className={`${loadingImage && "cursor-wait"} py-2 cursor-pointer`}
          disabled={loadingImage}
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;