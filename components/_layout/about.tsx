import { Logo } from "@/helpers/image-import";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col-reverse items-center justify-center py-20 sm:flex-row-reverse"
      id="about"
    >
      <div className="w-full space-y-5 text-customWhite sm:w-1/2">
        <h1 className="text-center text-[51px] leading-[1.1em] sm:text-start sm:text-[100px]">
          About
        </h1>
        <p
          className="text-center text-[16px] sm:text-start sm:text-[28px]"
          style={{ textShadow: "0 0 5px #000" }}
        >
          PEIPEI Token merges the beloved Pepe meme with the charm of PEPE
          cultural elements, resulting in a refreshing and captivating synthesis
          that pays homage to tradition while embracing the future. Join us on
          an exhilarating journey that’s unlike any other in the crypto space.
          PEIPEI Token isn’t just a digital asset; it’s an experience that
          allows you to be part of a movement that’s rewriting the rules of
          engagement.
        </p>
      </div>
      <div className="flex w-full justify-center sm:w-1/2">
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

export default About;
