import { Factory, Seeder } from 'typeorm-seeding';
import { Contract } from '../../contracts/contract.entity';

export class CreateContract implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Contract)().seed();
  }
}