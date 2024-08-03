import { Logo } from "@/helpers/image-import";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menu = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#htb",
    title: "How to buy",
  },
  {
    href: "#tokenomics",
    title: "Tokenomics",
  },
  {
    href: "#roadmap",
    title: "Roadmap",
  },
];

const Navbar = () => {
  return (
    <div className="hidden items-center justify-between py-7 sm:flex">
      <Link href={"#"}>
        <Image
          src={Logo}
          alt="logo"
          width={97}
          height={91}
          className="object-cover"
        />
      </Link>

      <div className="space-x-10 text-[23px] text-customWhite">
        {menu.map((a, i) => (
          <Link
            className="font-[500] lowercase hover:text-customGreen"
            href={a.href}
            key={i}
          >
            {a.title}
          </Link>
        ))}
      </div>
      <button className="rounded-full border-[2px] border-solid border-customWhite bg-customGreen px-8 py-4 text-[19px] leading-4 text-white hover:scale-105">
        <a href="#">Buy Now</a>
      </button>
    </div>
  );
};

export default Navbar;
