import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="font-sans">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
