import { SetIsMenuOpenType } from "../types/types";
export const handleResize = (setIsMenuOpen: SetIsMenuOpenType) => {
  if (window.innerWidth > 768) {
    setIsMenuOpen(false);
  }
};
