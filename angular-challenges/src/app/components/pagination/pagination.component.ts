import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
    @Input() step: number = 2;
    @Input() totalItems: number;
    @Input() pageSize: number;
    @Output() pageChanged = new EventEmitter<number>();

    activePage: number;
    hasNext: boolean;
    hasPrevious: boolean;

    get pageCount(): number {
        return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
    }

    get pages(): number[] {
        const pages = [];
        if (this.activePage > 1) {
            pages.push(this.activePage - 1);
        }

        pages.push(this.activePage);

        if (this.activePage < this.pageCount) {
            pages.push(this.activePage + 1);
        }

        if (this.activePage + 1 < this.pageCount) {
            pages.push(this.activePage + 2);
        }

        if (this.activePage + 1 < this.pageCount && this.activePage === 1) {
            pages.push(this.activePage + 3);
        }

        return pages;
    }

    ngOnInit(): void {
        this.updateActive(1);
    }

    updateActive(page: number): void {
        this.activePage = page;
        this.updateButtons();
        this.pageChanged.emit();
    }

    updateButtons(): void {
        this.hasPrevious = this.activePage - this.step > 0;
        this.hasNext = this.activePage + this.step <= this.pageCount;
    }

    clickPrev(): void {
        if (!this.hasPrevious) return;

        this.updateActive(this.activePage - this.step);
    }

    clickNext(): void {
        if (!this.hasNext) return;

        this.updateActive(this.activePage + this.step);
    }
}
