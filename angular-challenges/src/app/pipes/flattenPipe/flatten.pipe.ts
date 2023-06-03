import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false
})
export class FlattenPipe implements PipeTransform {

  transform(flattenedArray: unknown[]): unknown[] {
    return this.flatten(flattenedArray) || [];
  }

  private flatten(array: unknown[]): unknown[] {
    const result: unknown[] = [];
    // we iterate over all values in array
    // if it regular value we push it to result array
    // if it is an array we move deeper and push value of each array in our result
    array.forEach(item => {
      if (Array.isArray(item)) {
        result.push(...this.flatten(item));
      } else {
        result.push(item);
      }
    });

    return result;
  }

}
