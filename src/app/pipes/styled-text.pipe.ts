import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'styledText',
  standalone: true, 
})
export class StyledTextPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return `<span class="text-[18px] font-medium ">${value}</span>`;
  }
}
