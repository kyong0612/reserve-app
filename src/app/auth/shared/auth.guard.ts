import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard {

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger
    if (this.authService.isAuthticated()) return true;
    // else navigate to login
    debugger
    this.router.navigate(['/login'])
    return false
  }
}