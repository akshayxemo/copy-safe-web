import Image from "next/image";

const ImageShowCase = () => {
  return (
    <section className="py-14">
      <div className="container flex flex-col justify-center items-center gap-8 mb-20">
        <div className="text-center">
          <h1 className="text-3xl mb-2">
            Start by uploading an image containing Text
          </h1>
          <p>
            The text from the image will be automatically recognized and
            availabe in the chatbox to be used.
          </p>
        </div>
        <Image
          src={"/images/chat-page.png"}
          alt="chat-show"
          width={1000}
          height={400}
          //   className="w-full aspect-video"
        />
      </div>
      <div className="container flex flex-col justify-center items-center mb-20">
        <div className="text-center">
          <h1 className="text-3xl mb-2">Analysis</h1>
          <p>
            It will take some time before the server get back with the response
            meanwhile it will show a loading screen.
          </p>
        </div>
        <Image
          src={"/images/chat-page-loading.png"}
          alt="chat-show"
          width={1000}
          height={400}
          //   className="w-full aspect-video"
        />
      </div>
      <div className="container flex flex-col justify-center items-center mb-20">
        <div className="text-center">
          <h1 className="text-3xl mb-2">Show Response</h1>
          <p>
            After evaluating you given article abstact our model generate and
            response back the most matched result with the similarity score.
          </p>
        </div>
        <Image
          src={"/images/chat-page-response.png"}
          alt="chat-show"
          width={1000}
          height={400}
          //   className="w-full aspect-video"
        />
      </div>
    </section>
  );
};

export default ImageShowCase;
