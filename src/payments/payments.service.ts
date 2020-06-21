import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentsRepository } from './payments.repository';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentsRepository)
    private paymentsRepository: PaymentsRepository) {
  }

  getPayments() {
    return 'Hellp';
  }

  async getPaymentsByContractId(contractId: number): Promise<Payment> {
    const payment = await this.paymentsRepository.findOne(contractId);
    console.log(payment);

    // TODO If not found
    return payment;
  }

  async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentsRepository.createPayment(createPaymentDto);
  }
}
