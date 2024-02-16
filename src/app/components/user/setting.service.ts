// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SettingService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environment/env';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
    private apiURL = environment.apiPath; //YOUR API URL
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    constructor(private httpClient: HttpClient) {}
    getUsers(): Observable < any > {
        return this.httpClient.get < any > (this.apiURL + 'posts').pipe(catchError(this.errorHandler));
    }
    addUser(user: any): Observable < any > {
        return this.httpClient.post < any > (this.apiURL + 'posts', JSON.stringify(user), this.httpOptions).pipe(catchError(this.errorHandler))
    }
    // getUsersByID(id: number): Observable < any > {
    //     return this.httpClient.get < any > (this.apiURL + '/userapi/' + id).pipe(catchError(this.errorHandler))
    // }
    updateUser(user: any): Observable < any > {
        console.log(user)
        return this.httpClient.put < any > (this.apiURL + 'posts/' + user.userId, JSON.stringify(user), this.httpOptions).pipe(catchError(this.errorHandler))
    }
    removeUser(id: number) {
        return this.httpClient.delete < any > (this.apiURL + 'posts/' + id, this.httpOptions).pipe(catchError(this.errorHandler));
    }

    errorHandler(error: {
        error: {
            message: string;
        };status: any;message: any;
    }) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}