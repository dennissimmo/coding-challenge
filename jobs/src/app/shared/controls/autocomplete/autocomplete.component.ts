import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlItem, Value} from "@app/models/frontend";
import {distinctUntilChanged, filter, map, Observable, startWith, Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: AutocompleteComponent,
            multi: true
        }
    ]
})
export class AutocompleteComponent implements OnInit, OnDestroy, ControlValueAccessor {

    @Input() items: ControlItem[];
    @Input() placeholder: string;

    @Output() changed = new EventEmitter<Value>();

    formControl: FormControl = new FormControl();
    options$: Observable<ControlItem[]>;

    private destroy$ = new Subject<void>();

    constructor() {

    }

    ngOnInit(): void {
        this.options$ = this.formControl.valueChanges
            .pipe(
                startWith(''),
                filter(value => typeof value === 'string' || typeof value === 'object'),
                map(value => typeof value === 'string' ? value : value.label),
                map(label => label ? this.filter(label) : this.items.slice())
            )

        this.formControl.valueChanges
            .pipe(
                takeUntil(this.destroy$),
                distinctUntilChanged()
            ).subscribe(item => {
                const value = typeof item === 'object' ? item.value : null;
                this.propagateChange(value);
                this.changed.emit(value);
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private propagateChange: any = () => {
    };
    private propagateTouched: any = () => {
    };

    writeValue(value: Value) {
        const selectedOption: ControlItem = this.items.find(item => item.value === value);
        this.formControl.patchValue(selectedOption);
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {
        this.propagateTouched = fn;
    }

    setDisabledState(isDisabled: boolean) {
        isDisabled ? this.formControl.disable() : this.formControl.enable();
    }

    filter(value: string): ControlItem[] {
        const filterValue = value.toLowerCase();

        return this.items.filter(item => item.label.toLowerCase().includes(filterValue));
    }

    displayFn(item?: ControlItem): string | undefined {
        return item ? item.label : undefined;
    }

    onBlur(): void {
        this.propagateTouched();
    }

}
