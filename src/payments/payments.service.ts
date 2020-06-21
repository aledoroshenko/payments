import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  getPayments() {
    return 'Hellp';
  }

  getPaymentsById(id: string): string {
    return `by id ${id}`;
  }
}
