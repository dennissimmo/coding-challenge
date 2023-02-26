import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

    transform(fullString: string, highlightPart: string): string {
        // Should learn how that regular expression works
        const reg = new RegExp(highlightPart, 'gi');
        return fullString.replace(reg, match => `<b>${match}</b>`);
    }

}
