import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractsRepository } from './contracts.repository';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(ContractsRepository)
    private contractsRepository: ContractsRepository) {
  }

  // getPayments(): Promise<Payment[]> {
  //   const result = this.paymentsRepository.find();
  //
  //   console.log('RESULT', result);
  //
  //   return result;
  // }
  //
  // async getPaymentsByContractId(contractId: number): Promise<Payment> {
  //   const payment = await this.paymentsRepository.findOne(contractId);
  //   console.log(payment);
  //
  //   // TODO If not found
  //   return payment;
  // }
  //
  // async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
  //   return this.paymentsRepository.createPayment(createPaymentDto);
  // }

  getContracts() {
    const result = this.contractsRepository.find();

    console.log('RESULT', result);

    return result;
  }
}
