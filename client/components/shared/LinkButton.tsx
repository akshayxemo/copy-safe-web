"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LinkButton = ({
  text,
  link,
  icon,
  className = "",
}: {
  text: string;
  link: string;
  icon?: string;
  className?: string;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(link);
  };
  return (
    <Button
      className={`bg-white/5 hover:bg-white text-white hover:text-black ${className}`}
      onClick={handleClick}
    >
      {text}
      {icon && <span className="material-symbols-outlined ml-2">{icon}</span>}
    </Button>
  );
};

export default LinkButton;
