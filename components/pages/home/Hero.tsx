import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full h-[650px] bg-hero-pattern flex justify-center items-center relative">
      <div className="bg-gradient-to-t from-black to-transparent absolute z-10 w-full h-[400px] left-0 bottom-0"></div>
      <div className="container flex flex-col gap-4 items-center justify-center z-20">
        <h1 className="text-center text-5xl font-semibold font-sans tracking-tighter">
          Check Your Content's Originality.
        </h1>
        <p className="text-center font-extralight font-mono tracking-tighter max-w-[70%] mx-auto">
          Ensure Your Content's Originality and Stand Out with Our Advanced
          Uniqueness Detection Tool. Lets get started.
        </p>
        <Button className="mt-4 bg-white/5 hover:bg-white text-white hover:text-black">
          Get Started
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
