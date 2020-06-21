import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment } from './payment.entity';

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
}
