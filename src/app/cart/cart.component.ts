// cart.component.ts
import { Component, ViewChild } from '@angular/core';
import { StripeCardComponent, StripeCardNumberComponent, NgxStripeElementsOptions } from 'ngx-stripe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { StripeService } from './stripe.service';
import {environment as env } from "./environment"; // Make sure to adjust the path

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @ViewChild(StripeCardNumberComponent) card?: StripeCardComponent;

  public cardOptions: { locale: string, style: { base: any } } = {
    locale: 'en',
    style: {
      base: {
        fontWeight: 400,
        fontFamily: 'Circular',
        fontSize: '14px',
        iconColor: '#666EE8',
        color: '#002333',
        '::placeholder': {
          color: '#919191',
        },
      },
    },
  };

  public elementsOptions: NgxStripeElementsOptions = {
    locale: 'en',
  };

  paymentForm: FormGroup = this.fb.group({
    name: ['John', [Validators.required]],
    email: ['john@gmail.com', [Validators.required]],
    amount: [100, [Validators.required, Validators.pattern(/\d+/)]],
  });

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}

  pay(): void {
    if (this.paymentForm.valid) {
      this.createPaymentIntent(this.paymentForm.get('amount')?.value)
        .pipe(
          switchMap((pi) =>
            this.stripeService.confirmCardPayment(
              pi.client_secret,
              this.card?.element,
  { name: this.paymentForm.get('name')?.value }
            )

              )

        )
        .subscribe((result) => {
          if (result.error) {
            console.log(result.error.message);
          } else {
            if (result.paymentIntent.status === 'succeeded') {
              // Payment success logic
            }
          }
        });
    } else {
      console.log(this.paymentForm);
    }
  }

  createPaymentIntent(amount: number): Observable<any> {
    return this.http.post<any>(
      `${env.apiUrl}/create-payment-intent`,
      { amount }
    );
  }
}
