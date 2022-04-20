import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(loginForm: NgForm) {
    console.log(loginForm);
    this.router.navigate(['/home']);
    // const { email, password } = loginForm.value;
    // this.authService.onLogin(email, password).subscribe((response: any) => {
    //   if (response.message === 'SUCCESS') {
    //     this.router.navigate(['/users']);
    //   }
    // });
  }

  onReset(loginForm: NgForm) {
    loginForm.reset();
  }
}
