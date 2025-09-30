import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Auth } from '../../services/auth/auth';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';



@Component({
  selector: 'app-signup-client',
  standalone: true,  
  templateUrl: './signup-client.html',
  styleUrls: ['./signup-client.scss'],
   imports: [
    ReactiveFormsModule,
    RouterModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class SignupClient implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.invalid) {
      this.notification.warning('Warning', 'Please fill all required fields', {
        nzDuration: 3000,
      });
      return;
    }

    this.auth.registerClient(this.validateForm.value).subscribe({
      next: () => {
        this.notification.success('Success', 'Sign up successful', {
          nzDuration: 5000,
        });
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        this.notification.error('Error', `${err.error}`, {
          nzDuration: 5000,
        });
      },
    });
  }
}
