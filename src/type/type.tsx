import { ScreenNavigationProp } from "./type-screen";

export interface InputType {
  name: string;
  styles: any;
  required: boolean;
  secureTextEntry: boolean;
}

export interface ModalType {
  title?: string;
  message?: string;
  nameBtn?: string;
  // status is field support declare color on button when true is color blue
  // , false is color yellow
  status?: boolean;
  visible: boolean;
  onClose: any;
}

export type CardProp = {
  id?: string;
  image?: string;
  content?: string;
  rate?: any;
  comment?: string;
  title?: string;
  action?: boolean;
};

export type SettingOptionSelectProp = {
  id?: string;
  title: string;
  imgIcon: string;
  navigationScreen: () => void;
};

export type SearchProp = {
  setSearch?: any;
} & ScreenNavigationProp;

export type EateriesProp = {
  id?: string;
  name: string;
  page: number;
  size: number;
};
