type SetIsMenuOpen = React.Dispatch<React.SetStateAction<boolean>>;

export const handleResize = (setIsMenuOpen: SetIsMenuOpen) => {
  if (window.innerWidth > 768) {
    setIsMenuOpen(false);
  }
};
