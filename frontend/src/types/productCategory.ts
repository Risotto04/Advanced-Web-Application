export interface IProductCategory {
  _id: string;
  name: string;
  desc: string;
  picture: { data: number[]; type: string };
  categoryPicture: { data: number[]; type: string };
}
