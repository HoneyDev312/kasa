import {
  backIcon,
  closeIcon,
  deleteIcon,
  favorisFilledIcon,
  favorisIcon,
  localisationIcon,
  menuIcon,
  messageIcon,
  plusIcon,
  sendIcon,
} from "./svg";

export const icons = {
  back: backIcon,
  close: closeIcon,
  delete: deleteIcon,
  favoris: favorisIcon,
  favorisFilled: favorisFilledIcon,
  localisation: localisationIcon,
  menu: menuIcon,
  message: messageIcon,
  plus: plusIcon,
  send: sendIcon,
} as const;

export type IconName = keyof typeof icons;
