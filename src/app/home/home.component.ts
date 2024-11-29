import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { AuthService } from '../auth.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

export interface TokenModel {
  id: number;
  token: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private router = inject(Router);
  private restService = inject(RestService);
  private authService = inject(AuthService);

  loginStatus$ = this.authService.user$.pipe(map((u) => !!u));

  toAbout() {
    this.router.navigate(['about'], {
      queryParams: {
        lang: 'jp',
        level: 9,
      },
      fragment: 'baz',
    });
  }

  toReport() {
    this.router.navigate(['report', 2020, 'Brazil']);
  }

  login() {
    this.restService.get<TokenModel>('http://localhost:3000/auth/1').subscribe({
      next: (m) => this.authService.login(m),
    });
  }

  logout() {
    this.authService.logout();
  }
}
