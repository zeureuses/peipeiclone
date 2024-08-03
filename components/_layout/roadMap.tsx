import { Logo } from "@/helpers/image-import";
import Image from "next/image";
import React from "react";

const phase = [
  "Phase 1: $PEIPEI",
  "Phase 2: Vibe and HODL",
  "Phase 3: $PEIPEI Takeover",
];

const phaseDetail = [
  {
    title: "phase 1",
    description:
      "Launch <br><br> CoinGecko/Coinmarketcap Listings <br><br> 690+ Holders <br><br> Cultivate the $PEIPEI COIN ARMY",
  },
  {
    title: "phase 2",
    description:
      "Partnerships <br><br> Guerilla Marketing (we’ll be everywhere) <br><br> Exclusive holder content/community hang outs <br><br> 2500+ holders <br><br> CEX Listings",
  },
  {
    title: "phase 3",
    description:
      "Utility partnerships <br><br> Multichain bridging <br><br> Elon custom tesla <br><br> T1 Exchange Listings <br><br> 10,000+ holders <br><br> Flip USD",
  },
];

const RoadMap = () => {
  return (
    <div className="flex flex-col items-center space-y-20 py-20" id="roadmap">
      <h1 className="text-[51px] leading-[1.1em] text-customWhite sm:text-[100px]">
        RoadMap
      </h1>
      <div className="flex flex-col items-center sm:flex-row">
        <div>
          <Image
            src={Logo}
            height={183}
            width={171}
            className="h-[240px] w-[240px] object-cover sm:h-[400px] sm:w-[400px]"
            alt="Hero Image"
          />
        </div>
        <div className="flex flex-col space-y-5 rounded-lg border-[2px] border-solid border-customGreen p-5 text-center text-customWhite shadow-2xl sm:p-20">
          {phase.map((a, i) => (
            <p
              key={i}
              className="text-[23px] sm:text-[28px]"
              style={{ textShadow: "0 0 5px #000" }}
            >
              {a}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 sm:flex-row">
        {phaseDetail.map((a, i) => (
          <div
            className="w-[90%] flex-1 space-y-5 rounded-lg border-[2px] border-solid border-customGreen p-5 text-center text-customWhite shadow-2xl"
            key={i}
          >
            <h1 className="text-[44px] text-customGreen sm:text-[62px]">
              {a.title}
            </h1>
            <p
              className="space-x-5 text-[17px] sm:text-[21px]"
              style={{ textShadow: "0 0 5px #000" }}
              dangerouslySetInnerHTML={{ __html: a.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
