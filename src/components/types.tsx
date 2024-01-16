import { ReactNode } from "react";

type CardTypes = {
  id: number;
  category_name: string;
  type_name: string;
  image_url: string;
  price: number;
  services: ServicesTypes[];
};

type ServicesTypes = {
  id: number;
  name: string;
  price: number;
};

enum TextMaxLine {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
}

type BasePropsType = {
  className?: { readonly [key: string]: string } | string;
  children?: ReactNode;
};

type TextProps = {
  maxline?: TextMaxLine;
};

type ButtonPropTypes = BasePropsType &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type TextPropTypes = BasePropsType & TextProps;

export type {
  CardTypes,
  ServicesTypes,
  TextPropTypes,
  ButtonPropTypes,
};
