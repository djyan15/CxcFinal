
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(public http: HttpClient) {


   }
login(user: string, pass: string) {
// tslint:disable-next-line:prefer-const
let url = 'http://localhost:64767/user/login?username=' + user + '&contrasena=' + pass;

return this.http.get(url);

}
}
