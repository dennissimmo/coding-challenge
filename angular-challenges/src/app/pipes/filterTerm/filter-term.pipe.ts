import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
    transform(value: string[], term: string): string {
        if (!value.length) {
            return '';
        }

        return this.joinArrayInString(
            value.filter((str) => str.includes(term))
        );
    }

    joinArrayInString(arr: string[]): string {
        return arr.join(',');
    }
}
