import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() isAuthorized: boolean;
    @Output() signOut = new EventEmitter<void>();

    ngOnInit() {

    }

    onSignOut() {
        this.signOut.emit();
    }
}
