import bgStars from "./assets/background-stars.svg";
import MenuIcon from "./assets/burger";
import img from "./assets/planet-jupiter.svg";
import linkIcon from "./assets/icon-source.svg";
import arrow from "./assets/icon-chevron.svg";
import { useState, useEffect } from "react";
import { handleResize } from "./functions/handleResize";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // when the component mounts, i add an event listener to the window
  useEffect(() => {
    window.addEventListener("resize", () => {
      handleResize(setIsMenuOpen);
    });
    return () => {
      window.removeEventListener("resize", () => {
        handleResize(setIsMenuOpen);
      });
    };
  }, [setIsMenuOpen]);

  return (
    <section className="relative z-0 mb-10 text-white">
      <img
        alt="bg"
        src={bgStars}
        className="z-neg-1 absolute top-0 left-0 h-full w-full object-cover"
      />
      <h1 className="hidden">
        relative z-50 mx-auto flex w-full max-w-[1640px] justify-between
        border-b-[1px] border-white border-opacity-25 px-6 py-4 sm1:inline-block
        sm1:py-6 sm2:flex sm2:pb-0 sm2:pr-0
      </h1>

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
              <img
                src={arrow}
                alt="arrow"
                className="ml-auto h-[8px] w-[6px]"
              />
            </div>
            <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
              <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-ven "></div>
              <h1 className=" py-5">VENUS</h1>
              <img
                src={arrow}
                alt="arrow"
                className="ml-auto h-[8px] w-[6px]"
              />
            </div>
            <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
              <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-ear "></div>
              <h1 className=" py-5">EARTH</h1>
              <img
                src={arrow}
                alt="arrow"
                className="ml-auto h-[8px] w-[6px]"
              />
            </div>
            <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
              <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-mar "></div>
              <h1 className=" py-5">MARS</h1>
              <img
                src={arrow}
                alt="arrow"
                className="ml-auto h-[8px] w-[6px]"
              />
            </div>
            <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
              <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-jup "></div>
              <h1 className=" py-5">JUPITER</h1>
              <img
                src={arrow}
                alt="arrow"
                className="ml-auto h-[8px] w-[6px]"
              />
            </div>
            <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
              <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-sat "></div>
              <h1 className=" py-5">SATURN</h1>
              <img
                src={arrow}
                alt="arrow"
                className="ml-auto h-[8px] w-[6px]"
              />
            </div>
            <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
              <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-ura "></div>
              <h1 className=" py-5">URANUS</h1>
              <img
                src={arrow}
                alt="arrow"
                className="ml-auto h-[8px] w-[6px]"
              />
            </div>
            <div className="flex items-center justify-start border-b-[1px] border-white border-opacity-10">
              <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-nep "></div>
              <h1 className=" py-5">NEPTUNE</h1>
              <img
                src={arrow}
                alt="arrow"
                className="ml-auto h-[8px] w-[6px]"
              />
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
      <section className="relative z-10 mx-auto max-w-[1640px]">
        <div className="relative flex flex-col flex-wrap sm1:flex-row sm2:justify-center">
          {/*///////////////////////////////////////////// MENU */}
          <div
            className=" order-1 mb-5 flex w-full justify-between border-b-[1px] border-white border-opacity-20 px-6 pt-5 font-spartan text-me 
              sm1:order-3 sm1:w-1/2 sm1:flex-col sm1:justify-start sm1:gap-4 sm1:border-0 sm1:pr-10 sm1:text-mex 
              sm2:absolute sm2:top-[390px] sm2:right-[66px]  sm2:w-[350px] sm2:pr-0 sm3:top-[470px] sm3:right-[170px] "
          >
            <button
              className="pb-5 text-me text-white text-opacity-50 sm1:mr-auto sm1:flex sm1:w-full 
                sm1:border-[1px] sm1:border-white sm1:border-opacity-20 sm1:py-2 sm1:text-mex sm1:text-opacity-100 sm2:text-mexl  "
            >
              <span className="mx-4 hidden text-white text-opacity-50 sm1:inline">
                01
              </span>
              OVERVIEW
            </button>
            <button
              className="pb-5 text-me text-white text-opacity-50 
                sm1:mr-auto sm1:flex  sm1:w-full sm1:border-[1px] sm1:border-white sm1:border-opacity-20 sm1:py-2 sm1:text-mex sm1:text-opacity-100 sm2:text-mexl"
            >
              <span className="mx-4 hidden text-white text-opacity-50 sm1:inline">
                01
              </span>
              STRUCTURE
            </button>
            <button
              className="pb-5 text-me text-white text-opacity-50 sm1:mr-auto sm1:flex 
                sm1:w-full sm1:border-[1px] sm1:border-white sm1:border-opacity-20 sm1:py-2 sm1:text-mex sm1:text-opacity-100 sm2:text-mexl"
            >
              <span className="mx-4 hidden text-white text-opacity-50 sm1:inline">
                01
              </span>
              SURFACE
            </button>
          </div>

          {/*///////////////////////////////////////////// PLANET */}
          <div className="order-2 flex h-[250px] w-full items-center justify-center sm1:order-1 sm1:h-[460px] sm2:mr-20 sm2:h-[624px] sm2:w-1/2  sm3:h-[754px]">
            <img
              src={img}
              alt="img"
              className="my-0 mx-auto block h-auto scale-[0.4] sm1:scale-[0.63] sm2:scale-[0.8] sm3:scale-100"
            />
          </div>

          {/* //////////////////////////////////////////// SUMARRY */}
          <div className="order-3 mb-7 flex flex-col px-6 text-center sm1:order-2 sm1:w-1/2 sm1:pl-10 sm1:text-start sm2:mt-[70px] sm2:w-[350px] sm2:px-0 sm3:mt-[126px]">
            <h1 className="mb-4 font-antonio text-na sm1:text-nax sm2:h-[104px] sm2:text-naxl ">
              MERCURY
            </h1>
            <p className="mb-8 font-spartan text-p sm2:mb-0 sm2:h-[175px] sm2:text-pxl">
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </p>
            <div className=" flex items-center justify-center font-spartan text-lin sm1:justify-start sm2:text-linxl">
              <p className="text-white opacity-50">Source : </p>
              <a
                className="mx-1 font-bold text-white underline opacity-50"
                href="https://www.example.com"
              >
                Wikipedia
              </a>
              <img src={linkIcon} alt="icon" className="inline-block px-1" />
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////// DATA */}
        <div className="mx-6 sm1:mx-10 sm1:flex sm1:gap-3  sm2:mx-[90px] sm2:gap-8 sm3:mx-[170px]">
          <div
            className="mb-2 flex items-center justify-between border-[1px] border-white border-opacity-[0.2] px-6 py-4
                       sm1:w-full sm1:flex-col sm1:gap-[6px] sm2:gap-1 sm2:px-[23px] sm2:py-[20px]"
          >
            <h2 className=" font-spartan text-in font-bold text-white opacity-50 sm2:text-inxl">
              ROTATION TIME
            </h2>
            <h1 className="font-antonio  text-nu sm1:text-nux sm2:text-nuxl">
              58.6 days
            </h1>
          </div>
          <div
            className="mb-2 flex items-center justify-between border-[1px] border-white border-opacity-[0.2] px-6 py-4
                       sm1:w-full sm1:flex-col sm1:gap-[6px] sm2:gap-1 sm2:px-[23px] sm2:py-[20px]"
          >
            <h2 className=" font-spartan text-in font-bold text-white opacity-50 sm2:text-inxl">
              ROTATION TIME
            </h2>
            <h1 className="font-antonio  text-nu sm1:text-nux sm2:text-nuxl">
              58.6 days
            </h1>
          </div>
          <div
            className="mb-2 flex items-center justify-between border-[1px] border-white border-opacity-[0.2] px-6 py-4
                       sm1:w-full sm1:flex-col sm1:gap-[6px] sm2:gap-1 sm2:px-[23px] sm2:py-[20px]"
          >
            <h2 className=" font-spartan text-in font-bold text-white opacity-50 sm2:text-inxl">
              ROTATION TIME
            </h2>
            <h1 className="font-antonio  text-nu sm1:text-nu sm2:text-nuxl">
              58.6 days
            </h1>
          </div>
          <div
            className=" mb-2 flex items-center justify-between border-[1px] border-white border-opacity-[0.2] px-6 py-4
                       sm1:w-full sm1:flex-col sm1:gap-[6px] sm2:gap-1 sm2:px-[23px] sm2:py-[20px]"
          >
            <h2 className=" font-spartan text-in font-bold text-white opacity-50 sm2:text-inxl">
              ROTATION TIME
            </h2>
            <h1 className="font-antonio  text-nu sm1:text-nu sm2:text-nuxl">
              58.6 days
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
