import { Component, Input } from '@angular/core';
import { HtmlRegex } from './html-regex';

@Component({
    selector: 'app-rich-text-viewer',
    templateUrl: './rich-text-viewer.component.html',
    styleUrls: ['./rich-text-viewer.component.scss'],
})
export class RichTextViewerComponent {
    public validHtml: string;

    @Input() set htmlText(text: string) {
        const html = this.parseNonEmptyText(text);
        const isValidHTML = HtmlRegex.test(html);
        this.validHtml = isValidHTML ? html : '';
    }

    private parseNonEmptyText(html = '') {
        const htmlTags: RegExp = /<[^]*?>/g;
        const hasContent = html.replace(htmlTags, '').trim().length > 0;

        return hasContent ? html : '';
    }
}
