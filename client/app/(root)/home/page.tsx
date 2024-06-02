import Hero from "@/components/pages/home/Hero";
import StartInstructions from "@/components/pages/home/StartInstructions";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <StartInstructions />
    </div>
  );
}
