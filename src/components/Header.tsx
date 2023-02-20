import { useState } from "react";
import { HeaderProps } from "../types";
import arrow from "../assets/icon-arrow.svg";
import MenuIcon from "../assets/burger";

export const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <header
      className="relative z-40 mx-auto flex w-full max-w-[1640px] justify-between border-b-[1px]
        border-white border-opacity-25 px-6 py-4 sm1:inline-block 
        sm1:py-6 sm2:flex sm2:pb-0 sm2:pr-0
      "
    >
      <h1 className="font-antonio text-h1 sm1:mb-8 sm1:text-center">
        THE PLANETS
      </h1>
      {isMenuOpen && (
        <div className="absolute top-[69px] left-0 z-50 h-screen w-full bg-main-blue px-[24px] sm1:hidden">
          <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-mer "></div>
            <h1 className=" py-5">MERCURY</h1>
            <img src={arrow} alt="arrow" className="ml-auto h-[8px] w-[6px]" />
          </div>
          <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-ven "></div>
            <h1 className=" py-5">VENUS</h1>
            <img src={arrow} alt="arrow" className="ml-auto h-[8px] w-[6px]" />
          </div>
          <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-ear "></div>
            <h1 className=" py-5">EARTH</h1>
            <img src={arrow} alt="arrow" className="ml-auto h-[8px] w-[6px]" />
          </div>
          <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-mar "></div>
            <h1 className=" py-5">MARS</h1>
            <img src={arrow} alt="arrow" className="ml-auto h-[8px] w-[6px]" />
          </div>
          <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-jup "></div>
            <h1 className=" py-5">JUPITER</h1>
            <img src={arrow} alt="arrow" className="ml-auto h-[8px] w-[6px]" />
          </div>
          <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-sat "></div>
            <h1 className=" py-5">SATURN</h1>
            <img src={arrow} alt="arrow" className="ml-auto h-[8px] w-[6px]" />
          </div>
          <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-ura "></div>
            <h1 className=" py-5">URANUS</h1>
            <img src={arrow} alt="arrow" className="ml-auto h-[8px] w-[6px]" />
          </div>
          <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-nep "></div>
            <h1 className=" py-5">NEPTUNE</h1>
            <img src={arrow} alt="arrow" className="ml-auto h-[8px] w-[6px]" />
          </div>
        </div>
      )}
      <div className="hidden font-spartan sm1:flex sm1:justify-around sm2:pt-2">
        <h1 className="text-tr sm1:text-trx sm2:pr-[33px]">MERCURY</h1>
        <h1 className="text-tr sm1:text-trx sm2:pr-[33px]">VENUS</h1>
        <h1 className="text-tr sm1:text-trx sm2:pr-[33px]">EARTH</h1>
        <h1 className="text-tr sm1:text-trx sm2:pr-[33px]">MARS</h1>
        <h1 className="text-tr sm1:text-trx sm2:pr-[33px]">JUPITER</h1>
        <h1 className="text-tr sm1:text-trx sm2:pr-[33px]">SATURN</h1>
        <h1 className="text-tr sm1:text-trx sm2:pr-[33px]">URANUS</h1>
        <h1 className="text-tr sm1:text-trx sm2:pr-[33px]">NEPTUNE</h1>
      </div>
      <button
        className="relative z-0 sm1:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon
          color={`${isMenuOpen ? "#38384F " : "#FFF "} `}
          className="h-6 w-6"
        />
      </button>
    </header>
  );
};
