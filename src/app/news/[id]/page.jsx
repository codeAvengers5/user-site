import images from "@/components/images";
import Slider from "@/components/slider";
import React from "react";
import Newscard from "@/components/card/newsCard";

function page() {
  return (
    <div className="m-[40px] mt-[40px] min-h-[700px] max-w-full p-[20px] md:mx-[80px]">
      <section className="flex flex-col items-start justify-start">
        <div className="align-center flex w-full flex-col-reverse items-center justify-center gap-[10px] lg:flex-row lg:gap-[50px]">
          <div className="box-border flex  max-w-full flex-col items-center justify-start mq800:min-w-full">
            <div className="relative flex flex-col items-center justify-center md:max-w-[500px]">
              <p className="mb-[5px] text-2xl font-bold text-black">
                Ethiopian Press Visit Mekedoina
              </p>
              <p className="w-full text-[18px] text-black">
                We would like to thank Mr. Getnat Tadese, the CEO of the
                Ethiopian Press Organization, and the management members and
                staff of the Press Organization.Dear Commercial Bank of Ethiopia
                President Abe Sano, Board Members, Mr. Teklewold Atnafu, and All
                the Board Members: We are very appreciative that you visited our
                center, spoke with the elderly, and inquired about the
                building's condition. Thank you very much. We would like to
                thank Mr. Getnat Tadese, the CEO of the Ethiopian Press
                Organization, and the management members and staff of the Press
                Organization.Dear Commercial Bank of Ethiopia President Abe
                Sano, Board Members, Mr. Teklewold Atnafu, and All the Board
                Members: We are very appreciative that you visited our center,
                spoke with the elderly, and inquired about the building's
                condition. Thank you very much.
              </p>
            </div>
          </div>
          <div className="min-h-[200px] md:h-[700px] md:w-[700px]">
            <Slider images={images} width="600" />
          </div>
        </div>
        <div className="mt-[40px] flex flex-shrink-0 flex-col justify-center">
          <p className="text-2xl font-bold text-black">Recent News</p>
          <div className="flex flex-col items-start justify-start gap-10 md:flex-row">
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
