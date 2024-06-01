import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="font-sans bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
