import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Observer } from 'rxjs';
import { User } from '../users/user.model';

@Component({
    selector: 'app-service-documentation',
    templateUrl: './service-documentation.component.html',
    styleUrls: ['./service-documentation.component.scss'],
})
export class ServiceDocumentationComponent implements OnInit {
    user: User;

    constructor(private usersService: UsersService) {}

    ngOnInit(): void {
        const id = 1;
        const user$ = this.usersService.getUser(id);
        const userObserver: Observer<any> = {
            next: (user) => (this.user = user),
            error: (err) => console.error(err),
            complete: () => console.log('request is completed'),
        };
        user$.subscribe(userObserver);
    }
}
