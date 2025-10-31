export default interface Course {
  id: number;
  name: string;
  image: string;
  numOfLessons: number;
  numOfRates: number;
  averageRate: number;
  reviews: any[];
  desc: string;
  price: string;
  types: string[];
  isBestSeller?: boolean;
  discount: string;
}
