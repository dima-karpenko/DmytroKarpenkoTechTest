import {PaymentProvider, ProcessPaymentResponse} from "../PaymentProvider";

export class PaypalProvider implements PaymentProvider {
    processPayment(amount: number): ProcessPaymentResponse {
        console.log(`Processing payment using Paypal for $${amount}`);
        return {status: "error"};
    }
}
