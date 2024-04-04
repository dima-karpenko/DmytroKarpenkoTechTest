import {PaymentContext} from "../paymentProvider/PaymentProvider";
import {
  BrainTreeProvider,
  StripeProvider,
  PaypalProvider,
  PaymentProviderType
} from "../paymentProvider/paymentProcessingProviders";

export class CheckoutService {
  private paymentContext: PaymentContext;
  private brainTreeProvider = new BrainTreeProvider();
  private stripeProvider = new StripeProvider();
  private paypalProvider = new PaypalProvider();

  private cart: {amount: number};

  // We won't implement the shole constructor logic, let's ust pass the cart here
  constructor(cart: {amount: number}) {
    this.cart = cart;
  }

  // Let's say user can choose payment provider during checkout process
  selectPaymentProvider(chosenProvider: PaymentProviderType): void {
    switch (chosenProvider) {
      case PaymentProviderType.Stripe:
        this.paymentContext.setPaymentProvider(this.stripeProvider);
        break;
      case PaymentProviderType.BrainTree:
        this.paymentContext.setPaymentProvider(this.brainTreeProvider);
        break;
      case PaymentProviderType.Paypal:
        this.paymentContext.setPaymentProvider(this.brainTreeProvider);
        break;
      default:
        throw new Error("Payment provider was not chosen");
    }
  }

  // User can pay calling this method
  pay() {
    this.paymentContext.processPayment(this.cart.amount);
  }
}