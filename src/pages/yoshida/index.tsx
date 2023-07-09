import CommonImage from "@/components/common/CommonImage";
import { NextPage } from "next";

const rowTitle1 = "HABUMIZUHO";
const title1 = rowTitle1.split("").map(String);

const YoshidaPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      <div className="w-4/5 h-[100vh]">
        <div className="mt-24 grid grid-cols-[1fr,23fr] h-4/5">
          <div className="col-span-1 flex justify-center items-center">
            <h3 className="text-white font-inter text-lg">
              {title1.map((part, index) => (
                <span key={index} className="block transform rotate-90 text-center">
                  {part}
                </span>
              ))}
            </h3>
          </div>
          <div className="relative col-span-23">
            <CommonImage
              src="/habuchaan/habuchan5.jpg"
              alt="top image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* TODO: 改善 */}
        <p className="absolute top-0 left-1/2 w-[50vh] break-words whitespace-normal transform -translate-x-1/2 text-rose-100 font-meddon text-[20vh]">
          habuchaan
        </p>
      </div>
    </div>
  );
};

export default YoshidaPage;
