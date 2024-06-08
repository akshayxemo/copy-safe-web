"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

interface chat {
  message: string;
  response: [
    {
      title: string;
      abstract: string;
      aclId?: string;
      corpusId?: string;
      citation?: string;
      year?: string;
      url?: string;
      matchScore?: string;
    }
  ];
}

const page = ({ params }: { params: { id: string } }) => {
  const [chats, setChats] = useState<chat[]>([]);

  const getChats = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_BASE}/chat/find/${params.id}`
      );
      console.log("data", data);
      setChats(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-full h-full overflow-y-auto">
        {chats.length !== 0 ? (
          chats.map((chat, index) => {
            return (
              <div
                className="w-full grid grid-cols-1 gap-6 mb-6 last:mb-0"
                id="chats"
                key={index}
              >
                <div className="p-4 bg-purple-500/10 rounded-lg min-h-8 max-w-[80%] min-w-[30%] col-span-1 justify-self-end">
                  {chat.message}
                </div>
                <div className="p-2 bg-transparent rounded-lg min-h-8 max-w-[80%] min-w-[30%] col-span-1 justify-self-start grid grid-cols-1 gap-4">
                  {chat.response.length ? (
                    chat.response.map((el, index) => {
                      return (
                        <div
                          className="col-span-1 rounded-lg p-4 ring-1 ring-white/10"
                          key={index}
                        >
                          <h3 className="text-2xl mb-1">{el.title}</h3>
                          <p className="font-mono mb-4">Acl Id: {el.aclId}</p>
                          <p className="mb-4">{el.abstract}</p>
                          <div className="flex w-full gap-4 justify-between items-end">
                            <div>
                              <p>
                                <strong className="text-white">Year:</strong>{" "}
                                {el.year}
                              </p>
                              <p>
                                <strong className="text-white">
                                  Citation:
                                </strong>{" "}
                                {el.citation}
                              </p>
                              <p>
                                <strong className="text-white">
                                  Corpus Id:
                                </strong>{" "}
                                {el.corpusId}
                              </p>
                            </div>
                            <a
                              href={el.url}
                              target="blank"
                              title="Go to paper link"
                              className="p-3 rounded-full bg-white/5"
                            >
                              <SquareArrowOutUpRight className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-span-2">
                      Sorry! No response genrated by server
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-4xl">Hi, How can i help you?</h1>
            <p className="w-[50%] text-center">
              Please only insert the abstract of your article or choose to
              import an image containing text.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
