import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [ ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup implements OnInit {
   signupForm!: FormGroup;
    constructor(private fb: FormBuilder,private readonly auth: Auth,private router: Router) {}
 ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }


 passwordMatchValidator(form: FormGroup) {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    form.get('confirmPassword')?.setErrors({ mismatch: true });
  } else {
    form.get('confirmPassword')?.setErrors(null);
  }
  return null;
}

get f() {
  return this.signupForm.controls;
}


onSubmit() {
  if (this.signupForm.valid) {
    console.log('Form Submitted!', this.signupForm.value);

    const request = this.signupForm.value;
    console.log('Signup request:', request);

     this.auth.signup({
      data: {
        body: request
      },
      success: (response: any) => {
        console.log(' Login Success:', response);
        this.router.navigate(['/login']);
      },
      failure: (error: any) => {
        console.error(' Login Failed:', error);
      }
    });
  } else {
    this.signupForm.markAllAsTouched();
  }
}


}
