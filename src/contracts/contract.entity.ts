import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Contract extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
  //
  // @OneToMany(type => Payment, payment => payment.contract, { eager: true })
  // contracts: Payment[];
}