import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
    transform(value: string[], term: string): string[] {
        return value.filter((str) =>
            str.toLowerCase().includes(term.toLowerCase())
        );
    }
}
