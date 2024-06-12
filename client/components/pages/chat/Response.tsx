import { ResponseFrame } from "@/types";
import { SquareArrowOutUpRight } from "lucide-react";
const Response = ({ el, index }: { el: ResponseFrame; index: number }) => {
  return (
    <div className="col-span-1 rounded-lg p-4 ring-1 ring-white/10" key={index}>
      <h3 className="text-2xl mb-1">{el.title}</h3>
      <div className="flex gap-2 items-center justify-start mb-4">
        {el.aclId && (
          <p className="font-mono">
            <strong className="text-white">Acl Id:</strong> {el.aclId}
          </p>
        )}{" "}
        ,{" "}
        {el.matchScore && (
          <p className="font-mono">
            <strong className="text-white">Similarity:</strong>{" "}
            {/* {(el.matchScore * 100).toFixed(2)} % */}
            {el.matchScore} %
          </p>
        )}
      </div>
      <p className="mb-4">{el.abstract}</p>
      <div className="flex w-full gap-4 justify-between items-end">
        <div>
          {el.year && (
            <p className="font-mono">
              <strong className="text-white">Year:</strong> {el.year}
            </p>
          )}
          {el.citation && (
            <p>
              <strong className="text-white">Citation:</strong> {el.citation}
            </p>
          )}
          {el.corpusId && (
            <p>
              <strong className="text-white">Corpus Id:</strong> {el.corpusId}
            </p>
          )}
        </div>
        {el.url && (
          <a
            href={el.url}
            target="blank"
            title="Go to paper link"
            className="p-3 rounded-full bg-white/5"
          >
            <SquareArrowOutUpRight className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Response;
