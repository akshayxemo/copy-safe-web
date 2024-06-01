import PricingCards from "@/components/pages/pricing/PricingCards";

const page = () => {
  return (
    <section className="pt-20 h-full flex flex-col items-center justify-center bg-header-pattern">
      <h1 className="text-center text-4xl font-semibold">Choose Plan</h1>
      <PricingCards />
    </section>
  );
};

export default page;
