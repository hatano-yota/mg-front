import CommonImage from "@/components/common/CommonImage";
import YoshidaTitle from "@/components/yoshida/YoshidaTitle";
import { NextPage } from "next";

const demo = {
  title1: "HABUMIZUHO",
  title2: "ABOUT",
  title3: "PHOTO",
  decorativeLetters: "habuchaan",
  heading: "櫻坂46 ⊿",
  content: `On August 21, 2015, passed the audition to become a first-generation member of Keyakizaka46. In 2017, started appearing as a regular personality on the radio show "Chokotto Yattemasu!" Became a model for the women's fashion magazine "JJ" and, in 2021, "CLASSY."`,
};

const YoshidaPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      <div className="w-4/5 h-[1000vh]">
        {/* video range */}
        <div className="mt-24 flex h-[80vh]">
          <YoshidaTitle title={demo.title1} />
          <div className="relative w-[96%]">
            <CommonImage
              src="/habuchaan/habuchan5.jpg"
              alt="top image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* TODO: 改善 */}
          <p className="absolute top-0 left-1/2 w-[50vh] break-words whitespace-normal transform -translate-x-1/2 text-rose-100 font-meddon text-[20vh]">
            {demo.decorativeLetters}
          </p>
        </div>

        {/* about range */}
        <div className="mt-80 flex h-[50vh] text-white">
          <YoshidaTitle title={demo.title2} />
          <div className="ml-12 mr-8 w-[50%]">
            <div className="h-[23vh] text-[6vh] flex justify-center items-center font-jp">
              {demo.heading}
            </div>
            <div className="h-[27vh] text-[18px] flex items-center leading-8 font-jp">
              {demo.content}
            </div>
          </div>
          <div className="relative w-[46%]">
            <CommonImage
              src="/habuchaan/habuchan1.jpg"
              alt="about image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* photo range */}
        <div className="mt-80 flex h-[65vh]">
          <YoshidaTitle title={demo.title3} />
          <div className="relative w-[84%] mr-4 ml-12">
            <CommonImage
              src="/habuchaan/habuchan24.jpg"
              alt="main photo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="w-[12%] pr-10 overflow-y-auto overscroll-auto">
            <div className="relative w-full h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan4.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full mt-5 h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan2.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full mt-5 h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan6.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full mt-5 h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan17.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full mt-5 h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan18.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full mt-5 h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan19.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full mt-5 h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan27.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full mt-5 h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan22.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative w-full mt-5 h-[9vh] ">
              <CommonImage
                src="/habuchaan/habuchan23.jpg"
                alt="main photo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoshidaPage;
