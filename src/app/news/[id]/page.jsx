import images from "@/components/images";
import Slider from "@/components/slider";
import React from "react";
import Newscard from "@/components/newsCard";

function page() {
  return (
    <div className="flex w-[100vw] max-w-full flex-row items-start justify-start tracking-[normal]">
      <section className="relative flex max-w-full flex-1 flex-col items-start justify-start overflow-hidden bg-white text-left font-roboto text-xl text-white">
        <div className=" felx-col m-[20px] flex w-full items-center justify-evenly ">
          <div className="flex w-[800px] flex-shrink-0 flex-col items-center justify-center gap-10">
            <p className="text-4xl font-bold text-black">
              Ethiopian Press Visit Mekedoina
            </p>
            <p className="text-2xl text-black">
              We would like to thank Mr. Getnat Tadese, the CEO of the Ethiopian
              Press Organization, and the management members and staff of the
              Press Organization.Dear Commercial Bank of Ethiopia President Abe
              Sano, Board Members, Mr. Teklewold Atnafu, and All the Board
              Members: We are very appreciative that you visited our center,
              spoke with the elderly, and inquired about the building's
              condition. Thank you very much. We would like to thank Mr. Getnat
              Tadese, the CEO of the Ethiopian Press Organization, and the
              management members and staff of the Press Organization.Dear
              Commercial Bank of Ethiopia President Abe Sano, Board Members, Mr.
              Teklewold Atnafu, and All the Board Members: We are very
              appreciative that you visited our center, spoke with the elderly,
              and inquired about the building's condition. Thank you very much.
            </p>
          </div>
          <Slider images={images} width="700px" height="500px" />
        </div>
        <div className="m-10 mt-20 flex flex-shrink-0 flex-col justify-center">
          <p className="text-2xl font-bold text-black">Recent News</p>
          <div className="mt-10 flex flex-shrink-0 flex-row items-center justify-center gap-10">
            <Newscard
              imageUrl="../images/rectangle-46@2x.png"
              header="Title of news"
              place="Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in platea amet nec."
              date="21/04/2024"
            />
            <Newscard
              imageUrl="../images/rectangle-46@2x.png"
              header="Title of news"
              place="Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu commodo sed in platea amet nec."
              date="21/04/2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
