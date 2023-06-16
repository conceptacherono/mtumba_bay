export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  quantity?: number;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
