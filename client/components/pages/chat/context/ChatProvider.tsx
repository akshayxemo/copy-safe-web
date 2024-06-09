"use client";
import { Chat } from "@/types";
import { recognizeText } from "@/utils/functions";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  MutableRefObject,
  useRef,
} from "react";

interface ChatContextType {
  imageString: string | null;
  setImageString: React.Dispatch<React.SetStateAction<string | null>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  imageRef: MutableRefObject<HTMLInputElement | null>;
  fileValue: File | null;
  setFileValue: React.Dispatch<React.SetStateAction<File | null>>;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRefDivClick: () => void;
  loadingImage: boolean;
  setReqLoading: React.Dispatch<React.SetStateAction<boolean>>;
  reqLoding: boolean;
  chats: Chat[];
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [imageString, setImageString] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const [fileValue, setFileValue] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [reqLoding, setReqLoading] = useState<boolean>(false);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [chats, setChats] = useState<Chat[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // console.log("upload", file);
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        setFileValue(file);
        const imageUrl = reader.result as string;
        setImageString(imageUrl);
        setLoadingImage(true);
        const text: string = await recognizeText(imageUrl);
        setText(text);
        setLoadingImage(false);
      };
      reader.readAsDataURL(file);
    }

    if (event.target) {
      event.target.value = "";
    }
  };

  const handleRefDivClick = () => {
    // console.log("image ref", imageRef.current);
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  return (
    <ChatContext.Provider
      value={{
        imageString,
        setImageString,
        imageRef,
        text,
        setText,
        handleImageUpload,
        handleRefDivClick,
        loadingImage,
        setFileValue,
        fileValue,
        setReqLoading,
        reqLoding,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
