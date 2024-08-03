import React from "react";

const howTo = [
  {
    title: "make wallet",
    description:
      "download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
  },
  {
    title: "Get Some ETH",
    description:
      "have ETH in your wallet to switch to $PEIPEI. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
  },
  {
    title: "Go to Uniswap",
    description:
      "connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEIPEI token address into Uniswap, select $PEIPEI COIN, and confirm. When Metamask prompts you for a wallet signature, sign.",
  },
  {
    title: "Switch ETH for $PEIPEI",
    description:
      "switch ETH for $PEIPEI. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
  },
];

const HowToBuy = () => {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-5 py-20 text-customWhite"
      id="htb"
    >
      <h1 className="text-center text-[51px] leading-[1.1em] sm:text-[100px]">
        How to Buy
      </h1>
      {howTo.map((a, i) => (
        <div
          className="w-full rounded-lg border-[2px] border-solid border-white p-10 sm:w-[80%]"
          key={i}
        >
          <h1
            className="text-center text-[33px] sm:text-start sm:text-[43px]"
            style={{ textShadow: "0 0 5px #000" }}
          >
            {a.title}
          </h1>
          <p
            className="text-center text-[19px] sm:text-start sm:text-[27px]"
            style={{ textShadow: "0 0 5px #000" }}
          >
            {a.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HowToBuy;
