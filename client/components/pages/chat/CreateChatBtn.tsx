"use client";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

// Generate a UUID
const CreateChatBtn = () => {
  const router = useRouter();

  // Handle button click
  const handleButtonClick = () => {
    const myUuid = uuidv4();
    router.push(`/chat/${myUuid}`);
  };
  return (
    <Button
      className="mt-6 bg-white/5 hover:bg-purple-500/20"
      onClick={handleButtonClick}
    >
      Create Chat
    </Button>
  );
};

export default CreateChatBtn;
