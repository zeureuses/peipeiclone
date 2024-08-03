import {
  Dextool,
  Etherscan,
  Logo,
  Okx,
  Telegram,
  UniSwap,
  X,
} from "@/helpers/image-import";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialMedia = [
  {
    href: "#",
    image: X,
  },
  {
    href: "#",
    image: Telegram,
  },
  {
    href: "#",
    image: UniSwap,
  },
  {
    href: "#",
    image: Dextool,
  },
  {
    href: "#",
    image: Etherscan,
  },
  {
    href: "#",
    image: Okx,
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center py-20 sm:flex-row">
      <div className="w-full space-y-5 text-customWhite sm:w-1/2">
        <h1 className="text-center text-[80px] leading-[1.1em] sm:text-left sm:text-[160px]">
          PEI PEI
        </h1>
        <p
          className="text-center text-[18px] sm:text-left sm:text-[28px]"
          style={{ textShadow: "0 0 5px #000" }}
        >
          $PEIPEI the frog is a twist on Matt Furies famous Pepe The Frog
        </p>
        <div className="flex flex-wrap justify-center gap-5 sm:flex-nowrap sm:gap-0 sm:space-x-5">
          {socialMedia.map((a, i) => (
            <Link
              href={a.href}
              className={` ${i == 0 ? "bg-black text-white" : i === 1 ? "bg-blue-400" : "bg-white"} flex items-center rounded-full p-4`}
              key={i}
            >
              <Image
                src={a.image}
                alt={a.href}
                width={40}
                height={40}
                className="object-cover"
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-3 pt-5 sm:flex-row sm:space-x-3">
          <button className="rounded-full border-[2px] border-solid border-customWhite px-8 py-4 text-[31px] leading-4 text-white">
            <a>Buy Now</a>
          </button>
          <button className="rounded-full border-[2px] border-solid border-customWhite px-8 py-4 text-[31px] leading-4 text-white">
            <a>See Chart</a>
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center sm:w-1/2 sm:flex-row">
        <Image
          src={Logo}
          height={400}
          width={400}
          className="h-[240px] w-[240px] animate-floating object-cover transition-all sm:h-[400px] sm:w-[400px]"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
