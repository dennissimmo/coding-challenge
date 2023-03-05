import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";
import {dataURLtoFile} from "@app/shared/popups/files-upload/util";

@Component({
    selector: 'app-cropper',
    templateUrl: './cropper.component.html',
    styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit {

    @Input() image: File;

    @Output() changed = new EventEmitter<File>();

    croppedImage: string;

    ngOnInit(): void {
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;

    }

    onCrop(): void {
        const file: File = dataURLtoFile(this.croppedImage, this.image.name);
        this.changed.emit(file);
    }
}
