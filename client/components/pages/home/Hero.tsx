import LinkButton from "@/components/shared/LinkButton";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full h-[600px] bg-hero-pattern flex justify-center items-center relative">
      <div className="bg-gradient-to-t from-black to-transparent absolute z-10 w-full h-[420px] left-0 bottom-0"></div>
      <div className="container flex flex-col gap-4 items-center justify-center z-20">
        <h1 className="text-center text-5xl font-semibold font-sans">
          Check Your Content's Originality.
        </h1>
        <p className="text-center font-extralight max-w-[70%] mx-auto">
          Ensure Your Content's Originality and Stand Out with Our Advanced
          Uniqueness Detection Tool. Lets get started.
        </p>
        <LinkButton
          text="Get Started"
          icon="arrow_forward"
          link="/signup"
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default Hero;
