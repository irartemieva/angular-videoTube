import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { passwordValidator } from 'src/app/shared/validators/password';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  usernameCtrl = this.fb.control('', [Validators.required, Validators.email]);
  passwordCtrl = this.fb.control('', [Validators.required, passwordValidator()]); 
  userForm = this.fb.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}


  login() {
    console.log(this.userForm.value);
    localStorage.setItem('userName', this.userForm.value.username);

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggenIn) {
        const redirectUrl = '/';

        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        }

        this.router.navigate([redirectUrl], navigationExtras);
      }
    })
  }

}
