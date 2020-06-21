import { EntityRepository, Repository } from 'typeorm';
import { Payment } from './payments.entity';

@EntityRepository(Payment)
export class PaymentsRepository extends Repository<Payment> {

}