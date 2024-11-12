import { ScreenNavigationProp } from "./type-screen";

export interface InputType {
  name: string;
  styles: any;
  required: boolean;
  secureTextEntry: boolean;
  exampleValue?: string;
  value?: string;
  multiline: boolean;
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

export type SearchHistoryProp = {
  id?: string;
  textSearch: string;
  searchBy?: string;
};

export type ResultSearchProp = {
  id?: string;
  rate?: any;
  img?: string;
  name?: string;
  link_gg_map?: string;
  description?: string;
  type_eateries?: string;
  cityCode?: string;
  catId?: string;
  name_en?: string;
  address?: string;
  phone?: string;
  visit?: string;
  upTime?: string;
  count_rate?: string;
} & ScreenNavigationProp;

export type CommentProp = {
  id?: string;
  eateriesId?: string;
  rateFood?: string;
  rateService?: string;
  rateSpace?: string;
  content?: string;
  urlImg?: string;
};

export type ImgProp = {};
