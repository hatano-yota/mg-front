import CommonImage from "@/components/common/CommonImage";
import { NextPage } from "next";

const demo = {
  rowTitle1: "HABUMIZUHO",
  rowTitle2: "ABOUT",
  heading: "櫻坂46 ⊿",
  content: `On August 21, 2015, passed the audition to become a first-generation member of Keyakizaka46. In 2017, started appearing as a regular personality on the radio show "Chokotto Yattemasu!" Became a model for the women's fashion magazine "JJ" and, in 2021, "CLASSY."`,
};

const title1 = demo.rowTitle1.split("").map(String);
const title2 = demo.rowTitle2.split("").map(String);

const YoshidaPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      <div className="w-4/5 h-[1000vh]">
        {/* video range */}
        <div className="mt-24 grid grid-cols-[1fr,23fr] h-[80vh]">
          <div className="flex justify-center items-center">
            <h3 className="text-white font-inter text-lg">
              {title1.map((part, index) => (
                <span key={index} className="block transform rotate-90 text-center">
                  {part}
                </span>
              ))}
            </h3>
          </div>
          <div className="relative">
            <CommonImage
              src="/habuchaan/habuchan5.jpg"
              alt="top image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* TODO: 改善 */}
          <p className="absolute top-0 left-1/2 w-[50vh] break-words whitespace-normal transform -translate-x-1/2 text-rose-100 font-meddon text-[20vh]">
            habuchaan
          </p>
        </div>

        {/* about range */}
        <div className="mt-96 grid grid-cols-[1fr,12fr,11fr] h-[50vh] text-white">
          <div className="flex justify-center items-center">
            <h3 className="text-white font-inter text-lg">
              {title2.map((part, index) => (
                <span key={index} className="block transform rotate-90 text-center">
                  {part}
                </span>
              ))}
            </h3>
          </div>
          <div className="ml-12 mr-8">
            <div className="h-[23vh] text-[6vh] flex justify-center items-center font-jp">
              {demo.heading}
            </div>
            <div className="h-[27vh] text-[18px] flex items-center leading-8 font-jp">
              {demo.content}
            </div>
          </div>
          <div className="relative">
            <CommonImage
              src="/habuchaan/habuchan1.jpg"
              alt="about image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoshidaPage;
