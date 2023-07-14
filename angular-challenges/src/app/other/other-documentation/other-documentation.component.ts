import { Component } from '@angular/core';
import { fadeInOut } from '../animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFormDirty } from '../form-dirty.guard';

@Component({
    selector: 'app-other-documentation',
    templateUrl: './other-documentation.component.html',
    styleUrls: ['./other-documentation.component.scss'],
    animations: [fadeInOut],
})
export class OtherDocumentationComponent implements IFormDirty {
    isHeaderVisible: boolean;
    form: FormGroup = this.fb.group({
        text: '',
    });

    constructor(private fb: FormBuilder) {}

    toggleAnimation() {
        this.isHeaderVisible = !this.isHeaderVisible;
    }

    onSubmit() {
        console.log('submited');
    }
}
