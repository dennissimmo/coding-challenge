import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    const correctLength = 16;
    if (value.length > correctLength || value.length < correctLength) {
      return 'Invalid length';
    }

    if (!this.isAllNumbers(value)) {
      return 'Incorrect format';
    }

    return this.formatCardNumber(value);
  }

  private isAllNumbers(card: string): boolean {
    const numbersSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const numbersInCard = card.split("").filter((char) => numbersSet.includes(char));
    return numbersInCard.length === card.length;
  }

  private formatCardNumber(card: string): string {
    const parts = card.match(/[0-9]{1,4}/g);
    if (parts) {
      return parts.join("-");
    }

    return card;
  }

}
