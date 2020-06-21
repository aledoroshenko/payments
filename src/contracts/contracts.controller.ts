import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Contract } from './contract.entity';
import { ContractsService } from './contracts.service';
import { Payment } from './payment.entity';

@Controller('contracts')
export class ContractsController {
  constructor(private contractsService: ContractsService) {
  }

  @Get()
  getContracts(): Promise<Contract[]> {
    return this.contractsService.getContracts();
  }

  @Get(':id')
  getContractById(@Param('id', ParseIntPipe) id: number): Promise<Contract> {
    return this.contractsService.getContractById(id);
  }

  @Get(':id/payments')
  getContractPayments(@Param('id', ParseIntPipe) id: number): Promise<Payment[]> {
    return this.contractsService.getContractPayments(id);
  }
}
