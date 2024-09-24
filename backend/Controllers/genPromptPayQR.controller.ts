import { Request, Response } from "express";
import { genPromptPayQR } from "../lib/promptpay-qr";

export const genPromptPayQr = async (req: Request, res: Response) => {
  const amount = req.query.amount || req.params.amount;

  try {
    const amountNumber = Number(amount);

    if (!isNaN(amountNumber) && amountNumber > 0) {
      const qrCode = await genPromptPayQR(amountNumber);
      res.status(200).json({ data: qrCode });
    } else {
      res.status(400).json({ error: "Invalid or missing amount" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
