import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;

}

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) {

    }
    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALc-9fJBYbL_n-gKHsyp861-IYfSpOaK8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            });
    }
    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALc-9fJBYbL_n-gKHsyp861-IYfSpOaK8',
            {
                email: email,
                password: password,
                returnSecureToken: true
            });
    }
}