import { MouseEventHandler } from "react";

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface MainNavProps {
  data: Category[];
}

export interface BillboardProps {
  data: Billboard;
}

export interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export interface ProductListProps {
  title: string;
  items: Product[];
}

export interface ProductCard {
  data: Product;
}

export interface CurrencyProps {
  value?: string | number;
}

export interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}
