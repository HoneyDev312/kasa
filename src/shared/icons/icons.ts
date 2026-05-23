import {
  BackIcon,
  CloseIcon,
  DeleteIcon,
  FavorisIcon,
  LocalisationIcon,
  MessageIcon,
  PlusIcon,
  SendIcon,
} from "./svg";

export const icons = {
  back: {
    Svg: BackIcon,
    viewBox: "0 0 16 16",
  },
  close: {
    Svg: CloseIcon,
    viewBox: "0 0 16 16",
  },
  delete: {
    Svg: DeleteIcon,
    viewBox: "0 0 16 16",
  },
  favoris: {
    Svg: FavorisIcon,
    viewBox: "0 0 16 16",
  },
  localisation: {
    Svg: LocalisationIcon,
    viewBox: "0 0 16 16",
  },
  message: {
    Svg: MessageIcon,
    viewBox: "0 0 16 16",
  },
  plus: {
    Svg: PlusIcon,
    viewBox: "0 0 16 16",
  },
  send: {
    Svg: SendIcon,
    viewBox: "0 0 16 16",
  },
} as const;

export type IconName = keyof typeof icons;
