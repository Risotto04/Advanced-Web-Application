export interface IProduct {
  _id: string;
  name: string;
  price: number;
  picture: { data: number[]; type: string };
}
