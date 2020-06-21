import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractsRepository } from './contracts.repository';
import { Payment } from './payment.entity';
import { PaymentsRepository } from './payments.repository';

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

  async getContractById(id: number) {
    const found = await this.contractsRepository.findOne({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException('Contract not found');
    }

    return found;
  }

  async getContractPayments(id: number): Promise<Payment[]> {
    const found = await this.paymentsRepository.find({
      where: { contractId: id },
    });

    console.log('RESULT', found);

    return found;
  }
}
