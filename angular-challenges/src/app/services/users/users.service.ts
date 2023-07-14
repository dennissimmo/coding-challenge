import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private readonly API_URL = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {}

    getUser(id: number): Observable<User> {
        return this.http
            .get<User>(`${this.API_URL}/users/${id}`)
            .pipe(map((user) => new User(user)));
    }
}
