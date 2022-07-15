import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  @Input() login_image = '';
  @Input() portal_name = '';

  loginData: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginData = new FormGroup({
      UserID: new FormGroup(''),
      Password: new FormGroup(''),
    });
    // this.loginData.valueChanges.subscribe(console.log);
  }

  onLogin(): void {
    console.log(this.loginData);
  }
}
