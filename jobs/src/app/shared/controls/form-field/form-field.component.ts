import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

    @Input() label: string;
    @Input() required: boolean;
    @Input() isInline: boolean;
    @Input() control: AbstractControl;

    patternError: string;

    constructor() {
        this.isInline = true;
    }

    get errorKey() {
        return this.control && this.control.errors && Object.keys(this.control.errors)[0];
    }

    ngOnInit() {

    }

    hasError() :boolean {
        return this.control && this.control.invalid && this.control.touched;
    }

}
