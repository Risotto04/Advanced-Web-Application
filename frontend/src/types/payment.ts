export interface IPayment {
    id: string;
    slip: string;
    amount: number;
    recipient: string;
    recipient_phone_number: string;
    user_id: string;
    product_ids: string[];
}