import Hero from "@/components/pages/home/Hero";
import StartInstructions from "@/components/pages/home/StartInstructions";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <StartInstructions />
    </main>
  );
}
