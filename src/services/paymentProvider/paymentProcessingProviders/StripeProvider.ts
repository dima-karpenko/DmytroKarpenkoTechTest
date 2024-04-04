import {PaymentProvider, ProcessPaymentResponse} from "../PaymentProvider";

export class StripeProvider implements PaymentProvider {
    processPayment(amount: number): ProcessPaymentResponse {
        console.log(`Processing payment using Stripe for $${amount}`);
        return {status: "ok"};
    }
}
