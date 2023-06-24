export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  quantity: number | 1;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
