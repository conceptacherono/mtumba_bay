export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}
