import generatePayload from "promptpay-qr";
import qrcode from "qrcode";

const mobileNumber = "0902412209";

export async function genPromptPayQR(amount: number): Promise<string> {
  try {
    const payload = generatePayload(mobileNumber, { amount: amount });

    return await qrcode.toString(payload, { type: "svg" });
  } catch (err) {
    console.error("Error generating QR code:", err);
    throw err;
  }
}
