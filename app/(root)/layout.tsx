import Navbar from "@/components/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="font-sans">
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
