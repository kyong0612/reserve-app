import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    errors: any = {}
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    login(loginForm) {
        console.log(loginForm.value)
        this.authService.longin(loginForm.value).subscribe(
            (token) => {
                console.log('login success!')
                // console.log(token)
                //商品一覧ページへ遷移
                this.router.navigate(['/products'])
            },
            (err: HttpErrorResponse) => {
                console.error('something wrong occurred:' + err);
                this.errors = err.error.errors;
                console.log(this.errors)
            }
        )
    }
}
