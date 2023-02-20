import { SetIsMenuOpenType } from "../types";
export const handleResize = (setIsMenuOpen: SetIsMenuOpenType) => {
  if (window.innerWidth > 768) {
    setIsMenuOpen(false);
  }
};
