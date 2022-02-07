import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  maxDate = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(registerForm: NgForm): void {
    this.authService.register({
      email: registerForm.value.email,
      password: registerForm.value.password,
    });
  }
}
