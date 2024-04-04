import {PaymentProvider, ProcessPaymentResponse} from "../PaymentProvider";

export class BrainTreeProvider implements PaymentProvider {
    processPayment(amount: number): ProcessPaymentResponse {
        throw new Error("Method not implemented.");
    }
}
