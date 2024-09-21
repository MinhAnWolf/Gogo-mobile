export interface InputType {
  name: string;
  styles: any;
  required: boolean;
  secureTextEntry: boolean;
}

export type CardProp = {
  id: string;
  image: string;
  content: string;
  rate: string;
  comment: string;
  title: string;
  action: boolean;
};

export type SettingProp = {
  id: string;
  title: string;
};
