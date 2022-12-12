import React from "react";

export type ProductType = {
  brand: string;
  colour: string;
  description: string;
  height: number;
  img_url: string;
  length: number;
  model_code: string;
  name: string;
  power: string;
  price: number;
  quantity: number;
  weight: number;
  width: number;
};

export type BasketProps = {
  itemsInCart: number;
};

export type Highlighted = {
  highlighted: boolean;
};

export type Price = {
  product: ProductType;
  setItemsInCart: (itemsInCart: number) => void;
  itemsInCart: number;
};

type RowTable = {
  attribute: string;
  value: string | number;
};

export type TableProps = {
  specifications: RowTable[];
};

type BaseSectionProps = {
  highlighted?: boolean;
  title?: string;
};

export type SectionProps = {
  children?: React.ReactNode;
} & BaseSectionProps;

export type TextSectionProps = {
  text?: string;
} & BaseSectionProps;

export type TableSectionProps = {
  specifications: RowTable[];
} & BaseSectionProps;

export type ImageProps = {
  src: string;
  alt: string;
};
