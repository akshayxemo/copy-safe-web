import PricingCard from "./PricingCard";

const PricingCards = () => {
  return (
    <div className="py-10 flex gap-4">
      <PricingCard
        title={"Free"}
        desc={"For indivisual and personal use to get started."}
        list={["5 interaction per day", "1 image upload per day"]}
        buttonTitle={"Get Started"}
      />
      <PricingCard
        title={"Standard"}
        desc={"For individual or company to professional use."}
        list={[
          "50 interaction per day",
          "10 image upload per day",
          "Past 3 days chat history.",
          "7 days free trial",
        ]}
        buttonTitle={"Try for free"}
        price={"500"}
        interval={"/month"}
      />
      <PricingCard
        title={"Premium"}
        desc={"For individual or company to professional use."}
        list={[
          "Unlimited interaction",
          "100 image upload per day",
          "Unlimited chat history",
        ]}
        buttonTitle={"Select Premium"}
        price={"2500"}
        interval={"/month"}
      />
    </div>
  );
};

export default PricingCards;
