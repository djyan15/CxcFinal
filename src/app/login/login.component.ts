import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(public router: Router, public loginService: LoginService, private formBuilder: FormBuilder,) {}

  ngOnInit() {
        this.creaFormulario();
  }
creaFormulario() {
this.loginForm = this.formBuilder.group({
user: ['', [Validators.required, Validators.minLength(4)]],
pass: ['', [Validators.required, Validators.minLength(6)]]
});

}
  login(form: FormGroup) {
this.loginService.login(form.value['user'], form.value['pass']).subscribe(resp => {
if (resp.length === 0) {
  console.log('no paso');
  return;
} else {
  this.router.navigateByUrl('/dashboard');
}

   });


  }
}
