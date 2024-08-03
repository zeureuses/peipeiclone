import { Logo } from "@/helpers/image-import";
import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="tokenomics"
    >
      <h1 className="text-center text-[51px] leading-[1.1em] text-customWhite sm:text-start sm:text-[100px]">
        Tokenomics
      </h1>
      <p
        className="text-center text-[33px] text-customGreen sm:text-start sm:text-[52px]"
        style={{ textShadow: "0 0 5px #000" }}
      >
        Token Supply:
      </p>
      <span
        className="text-center text-[33px] text-customGreen sm:text-start sm:text-[52px]"
        style={{ textShadow: "0 0 5px #000" }}
      >
        420.69T
      </span>

      <div className="flex flex-col items-center justify-center pt-10 sm:flex-row">
        <div className="flex w-full flex-col space-y-5 rounded-lg border-[2px] border-solid border-customGreen p-5 text-center text-customWhite shadow-2xl sm:w-1/2 sm:px-10 sm:py-32">
          <h1 className="text-center text-[21px] leading-[1.1em] sm:text-start sm:text-[25px]">
            Zero percent Taxes, No Bullshit. It’s that simple.
          </h1>
          <p
            className="text-[40px] sm:text-[52px]"
            style={{ textShadow: "0 0 5px #000" }}
          >
            TAX 0% Buy / 0% Sell
          </p>
        </div>
        <div className="flex w-full justify-center sm:w-1/2">
          <Image
            src={Logo}
            height={400}
            width={400}
            className="h-[240px] w-[240px] animate-floatingRight object-cover transition-all sm:h-[400px] sm:w-[400px]"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
