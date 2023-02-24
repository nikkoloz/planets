export type SetIsMenuOpenType = React.Dispatch<React.SetStateAction<boolean>>;
export interface HeaderProps {
  setCurrentPlanet: React.Dispatch<React.SetStateAction<string>>;
  currentPlanet: string;
}

type ImagesType = {
  planet: string;
  internal: string;
  geology: string;
  [key: string]: string;
};

export type IPlanetData = {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: ImagesType;
};
export type ColorClassesTypes = {
  mercury: string;
  venus: string;
  earth: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
  [key: string]: string;
};
