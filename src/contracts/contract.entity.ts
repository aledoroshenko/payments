import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Payment } from './payment.entity';


@Entity()
export class Contract extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(type => Payment, payment => payment.contract, { eager: true })
  payments: Payment[];
}