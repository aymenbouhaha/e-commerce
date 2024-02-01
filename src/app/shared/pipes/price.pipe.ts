import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'price',
  pure : true
})
export class PricePipe implements PipeTransform {

  transform(value: number, percent : number): number {
    return value * (1 - percent);
  }

}
