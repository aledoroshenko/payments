import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Contract } from './contract.entity';
import { ManyToOne } from 'typeorm';


@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Contract, contract => contract.payments, { eager: false })
  contract: Contract;

  @Column()
  contractId: number;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  time: Date;

  @Column({ default: false })
  isImported: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: false })
  isDeleted: boolean;
}