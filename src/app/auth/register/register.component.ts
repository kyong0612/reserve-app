import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
    errors: any = {}
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    register(registerForm) {
        // console.log(registerForm.value)
        this.authService.register(registerForm.value).subscribe(
            () => {
                console.log('register success!');
                // 登録後ログイン画面へ遷移
                this.router.navigate(['/login'])
            },
            (err: HttpErrorResponse) => {
                console.error('something wrong occurred: ' + err);
                this.errors = err.error.errors;

            },

        )
    }
}
