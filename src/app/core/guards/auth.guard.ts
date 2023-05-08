import { Injectable } from '@angular/core';
import { Router, NavigationExtras, CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  //const router = inject(Router);
  //const authService = inject(AuthService);

  // if (authService.isLoggenIn) {
  //   return true;
  // }

  // const sessionId = 123456789;

  // const navigationExtras: NavigationExtras = {
  //   queryParams: { session_id: sessionId },
  //   fragment: 'anchor'
  // };

  // return router.createUrlTree(['/auth'], navigationExtras);
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
    //let url: string = state.url;

    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.isLoggenIn) {
    return true;
  }

  const sessionId = 123456789;

  const navigationExtras: NavigationExtras = {
    queryParams: { session_id: sessionId },
    fragment: 'anchor'
  };

  this.router.createUrlTree(['/auth'], navigationExtras);
  return false;
  }

}