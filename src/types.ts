export type SetIsMenuOpenType = React.Dispatch<React.SetStateAction<boolean>>;
export interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: SetIsMenuOpenType;
}
