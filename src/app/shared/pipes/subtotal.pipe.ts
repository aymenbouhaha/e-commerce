// subtotal.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../core/models/base-models/product/product";

@Pipe({
  name: 'subtotal'
})
export class SubtotalPipe implements PipeTransform {
  transform(values: number[]): number {
    return values.reduce((sum, value) => sum + value, 0);
  }
}
