import { Cart } from "@shared/models/cart";
import { Product } from "@shared/models/product";


export interface ICartItem {
    id: string;
    quantity: number;
    cart_id: Cart;
    product_id: Product;
}