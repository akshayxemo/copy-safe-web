const StartInstructions = () => {
  return (
    <section className="w-full py-8">
      <div className="container grid grid-cols-2 grid-rows-3 gap-x-14 gap-y-6">
        <div className="col-span-1 row-span-3 self-center">
          <h1 className="text-2xl font-semibold tracking-tighter mb-4">
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
            <h5 className="text-lg tracking-tighter">Sign up for a Free.</h5>
            <p>Choose a plan that fits your needs and create your account.</p>
          </div>
        </div>

        <div className="col-span-1 row-span-1 flex gap-5 items-start">
          <div className="aspect-square p-2 bg-indigo-500/10 rounded-md flex items-center justify-center">
            <span className="material-symbols-outlined text-indigo-500">
              article
            </span>
          </div>
          <div>
            <h5 className="text-lg tracking-tighter">Upload your text file</h5>
            <p>
              We support a variety of formats, including PDF, DOCX, and TXT.
            </p>
          </div>
        </div>

        <div className="col-span-1 row-span-1 flex gap-5 items-start">
          <div className="aspect-square p-2 bg-amber-500/10 rounded-md flex items-center justify-center">
            <span className="material-symbols-outlined text-amber-500">
              data_usage
            </span>
          </div>
          <div>
            <h5 className="text-lg tracking-tighter">Start asking questions</h5>
            <p>
              Interact with your document by asking specific or broad questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartInstructions;
