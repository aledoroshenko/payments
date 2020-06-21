import { EntityRepository, Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './create-payment.dto';
import { Contract } from './contract.entity';

@EntityRepository(Contract)
export class ContractsRepository extends Repository<Contract> {

}