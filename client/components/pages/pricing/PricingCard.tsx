import { Button } from "@/components/ui/button";

const PricingCard = ({
  title,
  desc,
  list,
  buttonTitle,
  buttonClass,
  price,
  interval,
}: {
  title: string;
  desc: string;
  list: string[];
  buttonTitle: string;
  buttonClass?: string;
  price?: string;
  interval?: string;
}) => {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-purple-500/5 backdrop-blur-lg w-80 gap-8 h-full">
      <div>
        <h1 className="text-2xl">{title}</h1>
        <p>{desc}</p>
        <ul className="flex flex-col gap-2 mt-8">
          {list.map((str, index) => {
            return (
              <li className="flex gap-2 items-center justify-start" key={index}>
                <span className="material-symbols-outlined text-green-400">
                  check
                </span>
                {str}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full">
        {price && (
          <div>
            <div className="flex gap-2 items-center border-t border-gray-500/50 py-6">
              <h3 className="text-4xl">&#8377; {price}</h3>
              {interval && <p className="">{interval}</p>}
            </div>
          </div>
        )}
        {/* <p className="text-center mb-2 text-sm">pay with any method</p> */}
        <Button
          className={`bg-white/5 text-white hover:text-black hover:bg-white py-6 w-full ${buttonClass}`}
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
