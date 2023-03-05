import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
    multiple: boolean;
    crop: boolean;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {

    isHovering: boolean;

    files: File[] = [];
    imageFile: File;
    isError: boolean;

    filesUrls: string[] = [];

    constructor(
        private dialogRef: MatDialogRef<FilesUploadComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    }

    ngOnInit(): void {

    }

    toggleHover(event: boolean): void {
        this.isHovering = event;
    }

    onDrop(files: FileList | HTMLInputElement): void {
        this.isError = false;
        let filesList: FileList;

        if (files instanceof HTMLInputElement) {
            filesList = files.files;
        } else if (files instanceof FileList) {
            filesList = files;
        }

        if (this.data.crop && filesList.length === 1 && filesList.item(0).type.split('/')[0] === 'image') {
            this.imageFile = filesList.item(0);
            return;
        }

        for (let i = 0; i < filesList.length; i++) {
            this.files.push(filesList.item(i));
        }

        console.log(this.files);
    }

    onUploadComplete(url: string) {
        this.filesUrls.push(url);
    }

    onClose(): void {
        this.dialogRef.close();
    }

    onComplete(): void {
        const result = this.data.multiple ? this.filesUrls : this.filesUrls[0];
        this.dialogRef.close(result);
    }

    onCrop(file: File): void {
        this.imageFile = null;
        this.files.push(file);
    }
}
