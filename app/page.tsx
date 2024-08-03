import Navbar from "@/components/_layout/navbar";
import { loadJsonData } from "../utils";
import Hero from "@/components/_layout/hero";
import About from "@/components/_layout/about";
import HowToBuy from "@/components/_layout/howToBuy";
import Exchange from "@/components/_layout/exchange";
import Tokenomics from "@/components/_layout/tokenomics";
import RoadMap from "@/components/_layout/roadMap";
import Footer from "@/components/_layout/footer";

export default function Home() {
  const jsonData = loadJsonData();

  return (
    <>
      <main className="w-full overflow-clip bg-customRed px-5 sm:px-40">
        <Navbar />
        <Hero />
        <About />
        <HowToBuy />
        <Exchange />
        <Tokenomics />
        <RoadMap />
      </main>
      <Footer />
    </>
  );
}
