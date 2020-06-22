import { EntityRepository, Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './create-payment.dto';

@EntityRepository(Payment)
export class PaymentsRepository extends Repository<Payment> {
  async createPayment(id: number, createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const { description, value } = createPaymentDto;

    const payment = new Payment();

    payment.description = description;
    payment.value = value;
    payment.contractId = id;

    await payment.save();

    return payment;
  }

}