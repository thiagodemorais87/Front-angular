import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBRL',
  standalone: true
})
export class CurrencyBRLPipe implements PipeTransform {
  transform(value: number | string): string {
    const numberValue = typeof value === 'string' ? parseFloat(value) : value;
    const formattedValue = numberValue.toFixed(2).replace('.', ',');

    return `R$ ${formattedValue}`;
  }
}
