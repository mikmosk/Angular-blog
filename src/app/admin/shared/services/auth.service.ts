import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FirebaseAuthResponse, User } from '../interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()

export class AuthService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return ''
  }

  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {

  }

  isAutenticated(): boolean {
    return !!this.token
  }

  private setToken(response: FirebaseAuthResponse | any) {
    console.log(response);

  }
}
