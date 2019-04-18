import { Component, OnInit } from '@angular/core';
import { AppService, AuthService } from '../shared/shared.module';
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    public constructor(public  appService: AppService, public  authService: AuthService, public  router: Router, ) {}

    public ngOnInit() {
        if (localStorage.get('isLoggedIn')) {
            this.authService.current_user = localStorage.get('current_user');
            this.authService.token = localStorage.get('token').toString();
            this.router.navigate(['/dashboard']);
        }
    }
    public username :string = '';
    public password :string = '';

    public error_message: any;
    public keyDownFunction(event) {
      if(event.keyCode == 13) {
        this.login();
      }
    }
    public login() {
        this.authService.redirectMessage = '';
        this.authService.login(this.username,this.password).subscribe(results => {
            if(results.result == 'success'){
                this.authService.token = results.token;
                this.authService.current_user = results.user;

                //save to localStorage
                localStorage.set('isLoggedIn',true);
                localStorage.set('token',results.token);
                localStorage.set('current_user',results.user);

                //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
                this.router.navigate(['/dashboard']);
            }else{
                this.error_message = results.message;
            }
        },error=>{this.appService.showPNotify('failure', "Server Error! Can't login", 'error');});
    }
    public forgotPassword(){
        this.router.navigate(['/forgot-password']);
    }
}
