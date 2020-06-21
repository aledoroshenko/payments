import { BaseEntity, Column } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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