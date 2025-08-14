export type Stay = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
  type: string;
};