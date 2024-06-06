"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
  return (
    <Link
      href={link}
      className={`bg-white/5 hover:bg-white text-white hover:text-black ${className} h-10 px-4 py-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium gap-2`}
      // onClick={handleClick}
    >
      {text}
      {icon && <ArrowRight />}
    </Link>
  );
};

export default LinkButton;
