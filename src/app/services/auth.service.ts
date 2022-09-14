import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class AuthService {

    constructor(private http: HttpClient) { }

    isLoggedIn() {
        const token = localStorage.getItem('token'); // get token from local storage
        // const payload = atob(token.split('.')[1]); // decode payload of token
        // const parsedPayload = JSON.parse(payload); // convert payload into an Object

        // return parsedPayload.exp > Date.now() / 1000; // check if token is expired
        return (token !== null);

    }




    login(val: any) {
        const token = localStorage.setItem('token', JSON.stringify(val)); // get token from local storage
        // const payload = atob(token.split('.')[1]); // decode payload of token
        // const parsedPayload = JSON.parse(payload); // convert payload into an Object
        // return parsedPayload.exp > Date.now() / 1000; // check if token is expired
    }


    logout() {
        // const token = localStorage.getItem('token'); // get token from local storage
        // const payload = atob(token.split('.')[1]); // decode payload of token
        // const parsedPayload = JSON.parse(payload); // convert payload into an Object
        // return parsedPayload.exp > Date.now() / 1000; // check if token is expired
        localStorage.removeItem('token')
    }

    register(postData: any) {
        let body = JSON.stringify(postData);
        console.log("onSubmit call", body);
        return this.http.post('/auth', postData)
    }

    checkUser(postData: any) {
        let body = JSON.stringify(postData);
        console.log("onSubmit call", body);
        return this.http.post('/auth/login', postData)
    }

}