const StartInstructions = () => {
  return (
    <section className="w-full py-8">
      <div className="container grid grid-cols-2 grid-rows-3 gap-x-14 gap-y-6">
        <div className="col-span-1 row-span-3">
          <h1 className="text-2xl font-semibold mb-4">
            Start Engaging in Minutes
          </h1>
          <p>
            Our intuitive platform makes it easy to start interacting with your
            text files. Follow these simple steps and begin your journey to
            deeper comprehension.
          </p>
        </div>
        <div className="col-span-1 row-span-1 flex gap-5 items-start">
          <div className="aspect-square p-2 bg-purple-500/10 rounded-md flex items-center justify-center">
            <span className="material-symbols-outlined text-purple-500">
              login
            </span>
          </div>
          <div>
            <h5 className="text-lg">Sign up for a Free.</h5>
            <p>
              Choose a plan that fits your needs and create your first free
              account.
            </p>
          </div>
        </div>

        <div className="col-span-1 row-span-1 flex gap-5 items-start">
          <div className="aspect-square p-2 bg-indigo-500/10 rounded-md flex items-center justify-center">
            <span className="material-symbols-outlined text-indigo-500">
              article
            </span>
          </div>
          <div>
            <h5 className="text-lg">Input your text</h5>
            <p>
              You will input your written abstract in the prompt or we also
              support uploading image that contains text.
            </p>
          </div>
        </div>

        <div className="col-span-1 row-span-1 flex gap-5 items-start">
          <div className="aspect-square p-2 bg-amber-500/10 rounded-md flex items-center justify-center">
            <span className="material-symbols-outlined text-amber-500">
              chat
            </span>
          </div>
          <div>
            <h5 className="text-lg">Getting Feedback from the AI</h5>
            <p>
              After processing your given image or text our model will check for
              similarity of your abstract with other abstract that has been
              trained.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartInstructions;
