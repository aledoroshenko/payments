import { EntityRepository, Repository } from 'typeorm';
import { Payment } from './payment.entity';

@EntityRepository(Payment)
export class PaymentsRepository extends Repository<Payment> {

}