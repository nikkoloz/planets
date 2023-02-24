import { useState, useEffect } from "react";
import { HeaderProps } from "../types/types";
import arrow from "../assets/icon-arrow.svg";
import MenuIcon from "../assets/burger";
import { handleResize } from "../functions/handleResize";

export const Header = ({ setCurrentPlanet, currentPlanet }: HeaderProps) => {
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

  const handleClick = (planet: string) => {
    setCurrentPlanet(planet);
    setIsMenuOpen(false);
  };
  return (
    <header
      className="relative z-40 mx-auto flex w-full max-w-[1640px] items-center justify-between
        border-b-[1px] border-white border-opacity-25 px-6 py-4 sm1:inline-block 
        sm1:pb-4 sm2:flex sm2:pr-0 sm2:pt-4"
    >
      <h1 className="font-antonio text-h1 sm1:pb-4 sm1:text-center sm2:pb-0">
        THE PLANETS
      </h1>
      {isMenuOpen && (
        <div className="absolute top-[69px] left-0 z-50 h-screen w-full bg-main-blue px-[24px] sm1:hidden">
          <div
            onClick={() => handleClick("mercury")}
            className="flex cursor-pointer items-center justify-start border-b-[1px] border-white border-opacity-10 pl-2
                      hover:bg-mercury hover:bg-opacity-20"
          >
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-mercury "></div>
            <button
              className={`my-5 ${
                currentPlanet.toLocaleLowerCase() === "mercury" &&
                "border-b-2 border-mercury"
              } `}
            >
              MERCURY
            </button>
            <img
              src={arrow}
              alt="arrow"
              className="ml-auto mr-2 h-[15px] w-[10px]"
            />
          </div>

          <div
            onClick={() => handleClick("venus")}
            className="flex cursor-pointer items-center justify-start border-b-[1px] border-white border-opacity-10 pl-2
                      hover:bg-venus hover:bg-opacity-20"
          >
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-venus "></div>
            <button
              className={`my-5 ${
                currentPlanet.toLocaleLowerCase() === "venus" &&
                "border-b-2 border-venus"
              } `}
            >
              VENUS
            </button>
            <img
              src={arrow}
              alt="arrow"
              className="ml-auto mr-2 h-[15px] w-[10px]"
            />
          </div>
          <div
            onClick={() => handleClick("earth")}
            className="flex cursor-pointer items-center justify-start border-b-[1px] border-white border-opacity-10 pl-2
                      hover:bg-earth hover:bg-opacity-20"
          >
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-earth "></div>
            <button
              className={`my-5 ${
                currentPlanet.toLocaleLowerCase() === "earth" &&
                "border-b-2 border-earth"
              } `}
            >
              EARTH
            </button>
            <img
              src={arrow}
              alt="arrow"
              className="ml-auto mr-2 h-[15px] w-[10px]"
            />
          </div>
          <div
            onClick={() => handleClick("mars")}
            className="flex cursor-pointer items-center justify-start border-b-[1px] border-white border-opacity-10 pl-2
                      hover:bg-mars hover:bg-opacity-20"
          >
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-mars "></div>
            <button
              className={`my-5 ${
                currentPlanet.toLocaleLowerCase() === "mars" &&
                "border-b-2 border-mars"
              } `}
            >
              MARS
            </button>
            <img
              src={arrow}
              alt="arrow"
              className="ml-auto mr-2 h-[15px] w-[10px]"
            />
          </div>
          <div
            onClick={() => handleClick("jupiter")}
            className="flex cursor-pointer items-center justify-start border-b-[1px] border-white border-opacity-10 pl-2
                      hover:bg-jupiter hover:bg-opacity-20"
          >
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-jupiter "></div>
            <button
              className={`my-5 ${
                currentPlanet.toLocaleLowerCase() === "jupiter" &&
                "border-b-2 border-jupiter"
              } `}
            >
              JUPITER
            </button>
            <img
              src={arrow}
              alt="arrow"
              className="ml-auto mr-2 h-[15px] w-[10px]"
            />
          </div>
          <div
            onClick={() => handleClick("saturn")}
            className="flex cursor-pointer items-center justify-start border-b-[1px] border-white border-opacity-10 pl-2
                      hover:bg-saturn hover:bg-opacity-20"
          >
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-saturn "></div>
            <button
              className={`my-5 ${
                currentPlanet.toLocaleLowerCase() === "saturn" &&
                "border-b-2 border-saturn"
              } `}
            >
              SATURN
            </button>
            <img
              src={arrow}
              alt="arrow"
              className="ml-auto mr-2 h-[15px] w-[10px]"
            />
          </div>
          <div
            onClick={() => handleClick("uranus")}
            className="flex cursor-pointer items-center justify-start border-b-[1px] border-white border-opacity-10 pl-2
                      hover:bg-uranus hover:bg-opacity-20"
          >
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-uranus "></div>
            <button
              className={`my-5 ${
                currentPlanet.toLocaleLowerCase() === "uranus" &&
                "border-b-2 border-uranus"
              } `}
            >
              URANUS
            </button>
            <img
              src={arrow}
              alt="arrow"
              className="ml-auto mr-2 h-[15px] w-[10px]"
            />
          </div>
          <div
            onClick={() => handleClick("neptune")}
            className="flex cursor-pointer items-center justify-start border-b-[1px] border-white border-opacity-10 pl-2
                      hover:bg-neptune hover:bg-opacity-20"
          >
            <div className="my-5 mr-[25px] h-[20px] w-[20px] items-center rounded-full bg-neptune "></div>
            <button
              className={`my-5 ${
                currentPlanet.toLocaleLowerCase() === "neptune" &&
                "border-b-2 border-neptune"
              } `}
            >
              NEPTUNE
            </button>
            <img
              src={arrow}
              alt="arrow"
              className="ml-auto mr-2 h-[15px] w-[10px]"
            />
          </div>
        </div>
      )}

      <div className="hidden items-center font-spartan sm1:flex sm1:justify-around">
        <button
          onClick={() => handleClick("mercury")}
          className={`rounded-full py-5 text-tr sm1:text-trx sm2:px-[16px] ${
            currentPlanet.toLocaleLowerCase() === "mercury" &&
            "border-b-4 border-mercury"
          }`}
        >
          MERCURY
        </button>
        <button
          onClick={() => handleClick("venus")}
          className={`rounded-full py-5 text-tr sm1:text-trx sm2:px-[16px] ${
            currentPlanet.toLocaleLowerCase() === "venus" &&
            "border-b-4 border-venus"
          }`}
        >
          VENUS
        </button>
        <button
          onClick={() => handleClick("earth")}
          className={`rounded-full py-5 text-tr sm1:text-trx sm2:px-[16px] ${
            currentPlanet.toLocaleLowerCase() === "earth" &&
            "border-b-4 border-earth"
          }`}
        >
          EARTH
        </button>
        <button
          onClick={() => handleClick("mars")}
          className={`rounded-full py-5 text-tr sm1:text-trx sm2:px-[16px] ${
            currentPlanet.toLocaleLowerCase() === "mars" &&
            "border-b-4 border-mars"
          }`}
        >
          MARS
        </button>
        <button
          onClick={() => handleClick("jupiter")}
          className={`rounded-full py-5 text-tr sm1:text-trx sm2:px-[16px] ${
            currentPlanet.toLocaleLowerCase() === "jupiter" &&
            "border-b-4 border-jupiter"
          }`}
        >
          JUPITER
        </button>
        <button
          onClick={() => handleClick("saturn")}
          className={`rounded-full py-5 text-tr sm1:text-trx sm2:px-[16px] ${
            currentPlanet.toLocaleLowerCase() === "saturn" &&
            "border-b-4 border-saturn"
          }`}
        >
          SATURN
        </button>
        <button
          onClick={() => handleClick("uranus")}
          className={`rounded-full py-5 text-tr sm1:text-trx sm2:px-[16px] ${
            currentPlanet.toLocaleLowerCase() === "uranus" &&
            "border-b-4 border-uranus"
          }`}
        >
          URANUS
        </button>
        <button
          onClick={() => handleClick("neptune")}
          className={`rounded-full py-5 text-tr sm1:text-trx sm2:px-[16px] ${
            currentPlanet.toLocaleLowerCase() === "neptune" &&
            "border-b-4 border-neptune"
          }`}
        >
          NEPTUNE
        </button>
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
