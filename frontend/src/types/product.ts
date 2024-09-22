export interface IProduct {
  _id: string;
  name: string;
  price: number;
  desc: string;
  picture: { data: number[]; type: string };
}
