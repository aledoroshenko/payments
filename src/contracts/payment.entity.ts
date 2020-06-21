import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Contract } from './contract.entity';
import { ManyToOne } from 'typeorm/browser';


@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(type => Contract, contract => contract.contracts, { eager: false })
  // contract: Contract;

  @Column()
  contractId: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  time: string;

  @Column()
  isImported: boolean;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  isDeleted: boolean;
}