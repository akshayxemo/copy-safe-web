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
  RefObject,
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
  chatContainerRef?: RefObject<HTMLDivElement>;
  scrollToBottom?: () => void;
  lastMessageRef: RefObject<HTMLDivElement>;
  scrollToLastChat: () => void;
  handleImageClick: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => Promise<void>;
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
  const [chats, setChats] = useState<Chat[]>([]);

  const imageRef = useRef<HTMLInputElement | null>(null);
  // const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // const scrollToBottom = () => {
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop =
  //       chatContainerRef.current.scrollHeight;

  //     console.log(chatContainerRef.current.scrollHeight);
  //   }
  // };
  const scrollToLastChat = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleImageClick = async (imageUrl: string) => {
  //   setImageString(imageUrl);
  //   setLoadingImage(true);
  //   const extractedText: string = await recognizeText(imageUrl);
  //   setText(extractedText);
  //   setLoadingImage(false);
  // };

  const handleImageClick = async (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const imageUrl = event.currentTarget.src;
    setImageString(imageUrl);
    setLoadingImage(true);
    const extractedText: string = await recognizeText(imageUrl);
    setText(extractedText);
    setLoadingImage(false);
  };

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
        lastMessageRef,
        scrollToLastChat,
        handleImageClick,
        // chatContainerRef,
        // scrollToBottom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
