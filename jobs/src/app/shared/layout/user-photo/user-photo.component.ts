import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
    selector: 'app-user-photo',
    templateUrl: './user-photo.component.html',
    styleUrls: ['./user-photo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPhotoComponent implements OnInit {

    @Input() photoUrl: string;

    constructor(
        private sanitizer: DomSanitizer
    ) {
    }

    get safePhotoURL(): SafeStyle {
        console.log(this.photoUrl);
        return this.photoUrl ? this.sanitizer.bypassSecurityTrustStyle(`url(${this.photoUrl})`) : null;
    }

    ngOnInit(): void {
    }

}
