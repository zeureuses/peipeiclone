import {
  Bitmart,
  Bybit,
  Gate,
  Lbank,
  Mexc,
  Poloniex,
  UniswapWhite,
} from "@/helpers/image-import";
import Image from "next/image";
import React from "react";

const images = [Gate, Mexc, Bitmart, Lbank, Poloniex, UniswapWhite, Bybit];

const Exchange = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 py-20 text-customWhite">
      <h1 className="text-center text-[51px] leading-[1.1em] sm:text-[100px]">
        Exchanges
      </h1>
      <div className="flex w-full flex-wrap items-center justify-center gap-5 space-y-5 pt-5 sm:space-y-0 sm:pt-20">
        {images.map((a, i) => (
          <div
            className="flex w-full items-center justify-center sm:w-[30%]"
            key={i}
          >
            <Image
              src={a}
              key={i}
              alt="exchange images"
              width={244}
              height={44}
              className="w-[100px] object-contain sm:w-[244px]"
            />
          </div>
        ))}
      </div>
      <h1 className="text-center text-[19px] leading-[1.1em] sm:text-[27px]">
        More Exchange list on the way
      </h1>
    </div>
  );
};

export default Exchange;
