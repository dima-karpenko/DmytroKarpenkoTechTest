export type Product = {
  id: number;
  invoiceId: string;
  customerId: number;
  shippingProviderId: number;
  paymentProcessorId: number;
  status: string;
  history: string;
  comments: string;
  totalAmount: number;
  createdAt: Date;
  lastUpdatedAt: Date;
}