// stripe.service.ts
import { Injectable } from '@angular/core';
import { StripeService as NgxStripeService, StripeCardComponent } from 'ngx-stripe';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private ngxStripeService: NgxStripeService) {}

  private async getStripeInstance(): Promise<any> {
    return this.ngxStripeService.stripe;
  }

  confirmCardPayment(clientSecret: string, card: StripeCardComponent, billingDetails: any): Observable<any> {
    return this.getStripeInstance().pipe(
      switchMap((stripe) =>
        stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card.element,
            billing_details: billingDetails,
          },
        })
      )
    );
  }
}
