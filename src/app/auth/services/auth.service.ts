import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggenIn = false;
  userName: string | null = '';

  constructor(
    private router: Router
  ) {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggenIn = true;
        this.userName = localStorage.getItem('userName') ? localStorage.getItem('userName'): 'Jane Doe';
        
      })
    )
  }

  logout(): void {
    this.isLoggenIn = false;
    this.router.navigate(['/auth']);
  }
}
