import categoryData from "./category.json";

export type NavigationLink = {
  label: string;
  href: string;
  id?: string;
};

export type ImageContent = {
  src: string;
  alt: string;
};

export type TravelCategoryData = typeof categoryData;

export const category: TravelCategoryData = categoryData;
