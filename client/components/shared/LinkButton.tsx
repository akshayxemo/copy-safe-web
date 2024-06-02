"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LinkButton = ({
  text,
  link,
  icon,
}: {
  text: string;
  link: string;
  icon: string;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(link);
  };
  return (
    <Button
      className="mt-4 bg-white/5 hover:bg-white text-white hover:text-black"
      onClick={handleClick}
    >
      {text}
      <span className="material-symbols-outlined ml-2">{icon}</span>
    </Button>
  );
};

export default LinkButton;
