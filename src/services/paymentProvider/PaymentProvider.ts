export type ProcessPaymentResponse = {
  status: 'ok' | 'error'
}

export interface PaymentProvider {
  processPayment(amount: number): ProcessPaymentResponse
}

export class PaymentContext {
  private paymentProvider: PaymentProvider;

  constructor(provider: PaymentProvider) {
    this.paymentProvider = provider;
  }

  setPaymentProvider(provider: PaymentProvider) {
    this.paymentProvider = provider;
  }

  processPayment(amount: number) {
    this.paymentProvider.processPayment(amount);
  }
}