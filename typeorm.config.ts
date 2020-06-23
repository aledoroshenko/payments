import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'payments',
  entities: ['src/**/*.entity.{js,ts}'], // Cant use __dirname here because of [1]
  synchronize: true,
};

// [1]: https://github.com/w3tecch/typeorm-seeding/issues/31

// Need this to make typeorm-seeding work, otherwise driver:undefined
// https://github.com/typeorm/typeorm/issues/4068
module.exports = typeOrmConfig