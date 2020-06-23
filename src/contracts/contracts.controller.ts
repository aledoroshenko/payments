import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Contract } from './contract.entity';
import { ContractsService } from './contracts.service';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './create-payment.dto';

@Controller('contracts')
export class ContractsController {
  constructor(private contractsService: ContractsService) {
  }

  @Get()
  getContracts(): Promise<Contract[]> {
    return this.contractsService.getContracts();
  }

  @Get('/test')
  test() {
    return this.contractsService.test();
  }

  @Get(':id')
  getContractById(@Param('id', ParseIntPipe) id: number): Promise<Contract> {
    return this.contractsService.getContractById(id);
  }

  @Get(':id/payments')
  getContractPayments(@Param('id', ParseIntPipe) id: number, @Query() query): Promise<Payment[]> {
    console.log('Query', query);
    return this.contractsService.getContractPayments(id);
  }

  @Post(':id/payments')
  createContractPayment(@Param('id', ParseIntPipe) id: number, @Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.contractsService.createContractPayment(id, createPaymentDto);
  }

  @Post()
  createContract(): Promise<Contract> {
    return this.contractsService.createContract();
  }
}
