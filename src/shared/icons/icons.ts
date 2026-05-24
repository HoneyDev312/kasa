import {
  backIcon,
  closeIcon,
  deleteIcon,
  favorisIcon,
  localisationIcon,
  messageIcon,
  plusIcon,
  sendIcon,
} from "./svg";

export const icons = {
  back: backIcon,
  close: closeIcon,
  delete: deleteIcon,
  favoris: favorisIcon,
  localisation: localisationIcon,
  message: messageIcon,
  plus: plusIcon,
  send: sendIcon,
} as const;

export type IconName = keyof typeof icons;
