import { EntityRepository, Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './create-payment.dto';

@EntityRepository(Payment)
export class PaymentsRepository extends Repository<Payment> {
  async createPayment(createPaymentDto: CreatePaymentDto) {
    const { description, value } = createPaymentDto;

    const payment = new Payment();

    payment.description = description;
    payment.value = value;
    payment.contractId = 'SOMEID';
    payment.time = 'some time';
    payment.isImported = false;
    payment.createdAt = 'createdtime';
    payment.updatedAt = 'updated time';
    payment.isDeleted = false;

    await payment.save();

    return payment;
  }
}