import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from './user.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginInfo: User = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) {}

  onLogin = () => {
    this.authService.login(this.loginInfo).subscribe((token) => {
      console.log(token)
      this.router.navigate(['/'])
    })
  }
}
