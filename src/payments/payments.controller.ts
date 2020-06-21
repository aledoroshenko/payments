import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './create-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {
  }

  @Get()
  getPayments(): string {
    return this.paymentsService.getPayments();
  }

  @Get(':id')
  getPaymentsById(@Param('id', ParseIntPipe) id: number): Promise<Payment> {
    return this.paymentsService.getPaymentsByContractId(id);
  }

  @Post()
  createPayment(@Body() createTaskDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentsService.createPayment(createTaskDto);
  }
}
