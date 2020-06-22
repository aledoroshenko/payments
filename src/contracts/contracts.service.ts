import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractsRepository } from './contracts.repository';
import { Payment } from './payment.entity';
import { PaymentsRepository } from './payments.repository';
import { Contract } from './contract.entity';
import { CreatePaymentDto } from './create-payment.dto';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(ContractsRepository)
    private contractsRepository: ContractsRepository,
    @InjectRepository(PaymentsRepository)
    private paymentsRepository: PaymentsRepository) {
  }

  async getContracts() {
    const result = await this.contractsRepository.find();

    console.log('RESULT', result);

    return result;
  }

  async getContractById(id: number): Promise<Contract> {
    const found = await this.contractsRepository.findOne({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException('Contract not found');
    }

    const sum = found.payments.reduce((sum, payment) => sum + payment.value, 0);

    return found;
  }

  async getContractPayments(id: number): Promise<Payment[]> {
    const found = await this.paymentsRepository.find({
      where: { contractId: id },
    });

    console.log('RESULT', found);

    return found;
  }

  async createContract(): Promise<Contract> {
    const contract = new Contract();
    contract.description = 'Some description';

    await contract.save();

    return contract;
  }

  async createContractPayment(id: number, createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentsRepository.createPayment(id, createPaymentDto);
  }

  async test() {
    const found = await this.contractsRepository.findOne({
      where: { id: 1 },
    });

  }
}
