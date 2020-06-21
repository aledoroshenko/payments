import { Controller, Get, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {
  }

  @Get()
  getPayments(): string {
    return this.paymentsService.getPayments();
  }

  @Get(':id')
  getPaymentsById(@Param('id') id: string): string {
    return this.paymentsService.getPaymentsById(id);
  }
}
