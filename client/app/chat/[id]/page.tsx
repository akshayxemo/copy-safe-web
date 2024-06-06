"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { recognizeText } from "@/utils/functions";
import { CloudUpload, ImagePlus, LoaderCircle, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const page = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fileUploadRef = useRef<HTMLInputElement | null>(null);
  const [recognizedText, setRecognizedText] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", handleResize);
      handleResize(); // Initial resize on mount
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener("input", handleResize);
      }
    };
  }, [recognizedText]);

  const handleDivClick = () => {
    if (fileUploadRef.current) {
      fileUploadRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
        setLoadingImage(true);
        const text: string = await recognizeText(imageUrl);
        setRecognizedText(text);
        setLoadingImage(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[80%] h-full flex flex-col justify-center items-center gap-4 mx-auto">
      <div className="flex-1 w-full overflow-y-auto">
        <div className="w-full h-full">
          <div className="h-full flex flex-col justify-center items-center gap-1">
            <h1 className="text-4xl">Hi, How can i help you?</h1>
            <p className="w-[50%] text-center">
              Please only insert the abstract of your article or choose to
              import an image containing text.
            </p>
            <div
              className="cursor-pointer border-dashed border border-white/20 rounded-md mt-4 w-80 aspect-video p-4 flex flex-col items-center justify-center gap-2 text-gray-500"
              onClick={handleDivClick}
            >
              <CloudUpload className="h-10 w-10" />
              <span>Click here to choose an image</span>
            </div>
          </div>
        </div>
      </div>
      <Input
        id="picture"
        accept="image/jpeg, image/jpg, image/png"
        ref={fileUploadRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex w-full">
        <div className="w-full bg-white/5 flex gap-1.5 justify-center items-end py-3 px-5 rounded-md cursor-pointer">
          <div className="py-2" onClick={handleDivClick}>
            {!loadingImage ? (
              <ImagePlus />
            ) : (
              <LoaderCircle className="animate-spin" />
            )}
          </div>
          <Textarea
            ref={textareaRef}
            rows={1}
            className="bg-transparent py-2 border-none placeholder:text-white/30 px-4 w-full h-auto resize-none overflow-y-auto"
            placeholder="Paste or type your article abstract here."
            style={{ minHeight: "2rem", maxHeight: "13rem" }}
            value={recognizedText}
            onChange={(e) => setRecognizedText(e.target.value)}
            disabled={loadingImage}
          />
          <button
            className={`${loadingImage && "cursor-wait"} py-2 cursor-pointer`}
            disabled={loadingImage}
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
