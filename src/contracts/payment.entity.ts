import {
  BaseEntity, BeforeInsert,
  BeforeUpdate,
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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  time: Date;

  @Column({ default: false })
  isImported: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @BeforeUpdate()
  updateUpdateTimestamp() {
    this.updatedAt = new Date;
  }

  @BeforeInsert()
  updateCreateTimestamp() {
    this.createdAt = new Date;
  }

  @Column({ default: false })
  isDeleted: boolean;
}