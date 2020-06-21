import { Module } from '@nestjs/common';
import { ContractsController } from './contracts.controller';
import { PaymentsRepository } from './payments.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractsService } from './contracts.service';
import { ContractsRepository } from './contracts.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentsRepository, ContractsRepository]),
  ],
  controllers: [ContractsController],
  providers: [ContractsService],
})
export class ContractsModule {
}
