import {BaseRepository, DB} from "./base/BaseRepository";
import {PaymentProcessor} from "../models/PaymentProcessor";

export class PaymentProcessorRepository extends BaseRepository<PaymentProcessor> {
  // Here we can implement specific methods for repository
}

// Usage example (this code should be located in some service): if uncommented we can see that paymentRepo is already functional and type safe
const db = {} as DB;
const paymentRepo = new PaymentProcessorRepository(db, 'PaymentProcessor');