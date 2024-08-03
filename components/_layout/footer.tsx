import { BgFooter, Logo } from "@/helpers/image-import";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const swap = [
  {
    href: "#",
    title: "Dextools",
  },
  {
    href: "#",
    title: "Okx",
  },
  {
    href: "#",
    title: "Uniswap",
  },
  {
    href: "#",
    title: "Etherscan",
  },
];

const community = [
  {
    href: "#",
    title: "Twitter",
  },
  {
    href: "#",
    title: "Telegram",
  },
];

const Footer = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={BgFooter}
        alt="Bgfooter"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-customRed bg-fixed opacity-80" />

      <div className="relative z-30 flex h-full flex-col items-center justify-center space-y-10 bg-fixed px-5 py-10 opacity-100 sm:px-40">
        <div className="flex w-full flex-col justify-between space-y-5 sm:flex-row sm:space-x-4">
          <div className="flex items-center justify-center">
            <Image
              src={Logo}
              height={262}
              width={281}
              className="object-cover"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col items-center space-y-3 text-white">
            <h1 className="text-[43px]">Trade</h1>
            {swap.map((e, i) => (
              <Link
                className="text-[20px] hover:text-customGreen"
                href={e.href}
                key={i}
              >
                {e.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-3 text-white">
            <h1 className="text-[43px]">Community</h1>
            {community.map((e, i) => (
              <Link
                className="text-[20px] hover:text-customGreen"
                href={e.href}
                key={i}
              >
                {e.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={Logo}
              height={262}
              width={281}
              style={{ transform: "scaleX(-1)" }}
              className="object-cover transition-all"
              alt="Logo"
            />
          </div>
        </div>

        <p
          className="text-center text-[18px] text-customGreen sm:text-[23px]"
          style={{ textShadow: "0 0 5px #000" }}
        >
          $PEIPEI coin has no association with Matt Furie or his creation Pepe
          the Frog. This token is simply paying homage to a meme we all love and
          recognize. $PEIPEI is a meme coin with no intrinsic value or
          expectation of financial return. There is no formal team or roadmap.
          the coin is completely useless and for entertainment purposes only.
        </p>
        <p
          className="text-center text-[18px] text-white sm:text-[23px]"
          style={{ textShadow: "0 0 5px #000" }}
        >
          Copyright 2024 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
