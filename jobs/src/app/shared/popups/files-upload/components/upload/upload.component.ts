import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {finalize, Observable, Subject, takeUntil} from "rxjs";
import firebase from "firebase/compat";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

    @Input() file: File;

    @Output() completed = new EventEmitter<string>();

    task: AngularFireUploadTask;

    percentage$: Observable<number>;
    snapshot$: Observable<firebase.storage.UploadTaskSnapshot>;
    downloadURL: string;

    destroy$ = new Subject<void>();

    constructor(
        private storage: AngularFireStorage
    ) {
    }

    ngOnInit(): void {
        this.startUpload();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    startUpload(): void {
        // build a file path
        const path = `${this.file.type.split('/')[0]}/${Date.now()}_${this.file.name}`;
        // create storageRef
        const storageRef = this.storage.ref(path);
        // create an upload task
        this.task = this.storage.upload(path, this.file);
        // setup percentage and snapshot streams
        this.percentage$ = this.task.percentageChanges();
        this.snapshot$ = this.task.snapshotChanges();

        // listen for uploading finish
        this.snapshot$.pipe(
            takeUntil(this.destroy$),
            finalize(async () => {
                // get downloadUrl
                this.downloadURL = await storageRef.getDownloadURL().toPromise();
                // emit download link
                this.completed.next(this.downloadURL);
            })
        ).subscribe();
    }

}
