import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;

    }

    onSubmit(authForm: NgForm) {
        const email = authForm.value.email;
        const password = authForm.value.password;
        this.isLoading = true;
        if (this.isLoginMode) {
            this.authService.login(email, password).subscribe(
                resData => {
                    console.log(resData);
                    this.isLoading = false;
                    this.router.navigate(['/recipes']);
                }, error => {
                    console.log(error);
                    this.error = 'an error has occured';
                    this.isLoading = false;
                }
            )
        } else {
            this.authService.signUp(email, password).subscribe(resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            }, error => {
                console.log('error');
                this.error = 'an error has occured';
                this.isLoading = false;
            });
        }



        authForm.reset();
    }


}