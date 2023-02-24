import bgStars from "./assets/background-stars.svg";
import linkIcon from "./assets/icon-source.svg";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { IPlanetData } from "./types/types";
import { colorClasses } from "./classNames/colorClasses";
import planetsData from "./data.json";

function App() {
  const [color, setColor] = useState<string>(
    `${planetsData[0].name.toLowerCase()}`
  );
  const [currentPlanet, setCurrentPlanet] = useState<string>(
    planetsData[0].name
  );
  const [currentPlanetData, setCurrentPlanetData] = useState<IPlanetData>(
    planetsData[0]
  );
  const [currentSection, setCurrentSection] = useState<string>("overview");
  const [currentSectionImg, setCurrentSectionImg] = useState<string>("planet");
  const [content, setContent] = useState<string>(
    planetsData[0].overview.content
  );
  const [source, setSource] = useState<string>(planetsData[0].overview.source);

  // when the current section changes, i set the current section image
  useEffect(() => {
    if (currentSection === "overview") {
      setCurrentSectionImg("planet");
      setContent(currentPlanetData.overview.content);
      setSource(currentPlanetData.overview.source);
    } else if (currentSection === "structure") {
      setCurrentSectionImg("internal");
      setContent(currentPlanetData.structure.content);
      setSource(currentPlanetData.structure.source);
    } else if (currentSection === "surface") {
      setCurrentSectionImg("geology");
      setContent(currentPlanetData.geology.content);
      setSource(currentPlanetData.geology.source);
    }
  }, [currentSection]);

  // when the current planet changes, i find the planet data and set it to the state
  useEffect(() => {
    planetsData.find((planet) => {
      if (
        planet.name.toLocaleLowerCase() === currentPlanet.toLocaleLowerCase()
      ) {
        setCurrentPlanetData(planet);
        setColor(`${planet.name.toLowerCase()}`);
        return;
      }
    });
    setCurrentSection("overview");
  }, [currentPlanet]);

  return (
    <section className="relative z-0 mb-10 text-white">
      <img
        alt="bg"
        src={bgStars}
        className="z-neg-1 absolute top-0 left-0 h-full w-full object-cover"
      />
      <Header
        setCurrentPlanet={setCurrentPlanet}
        currentPlanet={currentPlanet}
      />

      <section className="relative z-10 mx-auto max-w-[1640px]">
        <div className="relative flex flex-col flex-wrap sm1:flex-row sm2:justify-center">
          {/*///////////////////////////////////////////// MENU */}
          <div
            className=" order-1 mb-5 flex w-full justify-between border-b-[1px] border-white border-opacity-20 px-6 pt-5 font-spartan text-me 
              sm1:order-3 sm1:w-1/2 sm1:flex-col sm1:justify-start sm1:gap-4 sm1:border-0 sm1:pr-10 sm1:text-mex 
              sm2:absolute sm2:top-[390px] sm2:right-[66px]  sm2:w-[350px] sm2:pr-0 sm3:top-[470px] sm3:right-[170px] "
          >
            <button
              onClick={() => setCurrentSection("overview")}
              className={`pb-5 text-me text-white text-opacity-50
                 sm1:mr-auto sm1:flex sm1:w-full sm1:border-[1px] 
               sm1:border-white sm1:border-opacity-20 sm1:py-2 sm1:text-mex sm1:text-opacity-100 sm2:text-mexl
                ${
                  currentSection === "overview"
                    ? `${colorClasses[color]}`
                    : "sm1:hover:bg-hover-gray"
                }  
                `}
            >
              <span className="mx-4 hidden text-white text-opacity-50 sm1:inline">
                01
              </span>
              OVERVIEW
            </button>
            <button
              onClick={() => setCurrentSection("structure")}
              className={`pb-5 text-me text-white text-opacity-50 
                  sm1:mr-auto sm1:flex  sm1:w-full sm1:border-[1px] 
                sm1:border-white sm1:border-opacity-20 sm1:py-2 sm1:text-mex sm1:text-opacity-100 sm2:text-mexl
                ${
                  currentSection === "structure"
                    ? `${colorClasses[color]}`
                    : "sm1:hover:bg-hover-gray"
                }`}
            >
              <span className="mx-4 hidden text-white text-opacity-50 sm1:inline">
                01
              </span>
              STRUCTURE
            </button>

            <button
              onClick={() => setCurrentSection("surface")}
              className={`pb-5 text-me text-white text-opacity-50 sm1:mr-auto sm1:flex 
                   sm1:w-full sm1:border-[1px]
                 sm1:border-white sm1:border-opacity-20 sm1:py-2 sm1:text-mex sm1:text-opacity-100 sm2:text-mexl 
                 ${
                   currentSection === "surface"
                     ? `${colorClasses[color]}`
                     : "sm1:hover:bg-hover-gray"
                 }`}
            >
              <span className="mx-4 hidden text-white text-opacity-50 sm1:inline">
                01
              </span>
              SURFACE
            </button>
          </div>
          {/*///////////////////////////////////////////// PLANET */}
          <div
            className="order-2 flex h-[250px] w-full items-center justify-center sm1:order-1 sm1:h-[460px] 
                       sm2:mr-20 sm2:h-[624px] sm2:w-1/2  sm3:h-[754px]"
          >
            <img
              src={currentPlanetData.images[currentSectionImg].slice(1)}
              alt="img"
              className="my-0 mx-auto block h-auto scale-[0.4] sm1:scale-[0.63] sm2:scale-[0.8] sm3:scale-100"
            />
          </div>

          {/* //////////////////////////////////////////// SUMARRY */}
          <div
            className="order-3 mb-7 flex flex-col px-6 text-center sm1:order-2 sm1:w-1/2 sm1:pl-10 sm1:text-start 
                       sm2:mt-[70px] sm2:w-[350px] sm2:px-0 sm3:mt-[126px]"
          >
            <h1 className="mb-4 font-antonio text-na sm1:text-nax sm2:h-[104px] sm2:text-naxl ">
              {currentPlanetData.name.toLocaleUpperCase()}
            </h1>
            <p className="mb-8 font-spartan text-p sm2:mb-0 sm2:h-[175px] sm2:text-pxl">
              {content}
            </p>
            <div className="flex items-center justify-center font-spartan text-lin sm1:justify-start sm2:text-linxl">
              <p className="text-white opacity-50">Source : </p>
              <a
                className="mx-1 font-bold text-white underline opacity-50 hover:opacity-100"
                target="_blank"
                href={source}
              >
                Wikipedia
                <img src={linkIcon} alt="icon" className="inline-block px-2" />
              </a>
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
              {currentPlanetData.rotation}
            </h1>
          </div>
          <div
            className="mb-2 flex items-center justify-between border-[1px] border-white border-opacity-[0.2] px-6 py-4
                       sm1:w-full sm1:flex-col sm1:gap-[6px] sm2:gap-1 sm2:px-[23px] sm2:py-[20px]"
          >
            <h2 className=" font-spartan text-in font-bold text-white opacity-50 sm2:text-inxl">
              REVOLUTION TIME
            </h2>
            <h1 className="font-antonio  text-nu sm1:text-nux sm2:text-nuxl">
              {currentPlanetData.revolution}
            </h1>
          </div>
          <div
            className="mb-2 flex items-center justify-between border-[1px] border-white border-opacity-[0.2] px-6 py-4
                       sm1:w-full sm1:flex-col sm1:gap-[6px] sm2:gap-1 sm2:px-[23px] sm2:py-[20px]"
          >
            <h2 className=" font-spartan text-in font-bold text-white opacity-50 sm2:text-inxl">
              radius
            </h2>
            <h1 className="font-antonio  text-nu sm1:text-nu sm2:text-nuxl">
              {currentPlanetData.radius}
            </h1>
          </div>
          <div
            className=" mb-2 flex items-center justify-between border-[1px] border-white border-opacity-[0.2] px-6 py-4
                       sm1:w-full sm1:flex-col sm1:gap-[6px] sm2:gap-1 sm2:px-[23px] sm2:py-[20px]"
          >
            <h2 className=" font-spartan text-in font-bold text-white opacity-50 sm2:text-inxl">
              AVERAGE TEMP.
            </h2>
            <h1 className="font-antonio  text-nu sm1:text-nu sm2:text-nuxl">
              {currentPlanetData.temperature}
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
