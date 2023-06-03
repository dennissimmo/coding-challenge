import { Component, Input, OnInit } from '@angular/core';
import { CreditCardPipe } from "../../pipes/creditCardPipe/credit-card.pipe";

export type CardType = 'visa' | 'amex' | 'discover' | 'mastercard' | 'none';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
  providers: [
    CreditCardPipe
  ]
})
export class CreditCardInputComponent implements OnInit {

  private readOnly: boolean;

  @Input()
  cardNumber: string;

  @Input()
  set isEditable(readOnly: boolean) {
    this.readOnly = readOnly;
    this.updateCardType(this.cardNumber);
    if (!this.isEditable) {
      this.cardNumber = this.creditCardPipe.transform(this.cardNumber, 12);
    }
  }

  get isEditable(): boolean {
    return this.readOnly;
  }

  cardType: CardType;

  constructor(
    private creditCardPipe: CreditCardPipe
  ) {
  }

  ngOnInit() {

  }

  updateCardType(card: string): void {
    this.cardType = this.getCardType(card);
  }

  getCardType(cardNumber: string): CardType {
    if (cardNumber.startsWith('3')) {
      return 'amex';
    }

    if (cardNumber.startsWith('4')) {
      return 'visa';
    }

    if (cardNumber.startsWith('5')) {
      return 'mastercard';
    }

    if (cardNumber.startsWith('6')) {
      return 'discover';
    }

    return 'none';
  }

}
