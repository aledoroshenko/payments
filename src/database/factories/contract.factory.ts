import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Contract } from '../../contracts/contract.entity';

define(Contract, (faker: typeof Faker) => {
  const contract = new Contract();
  contract.description = faker.random.words(5);
  contract.payments = [];

  return contract;
});