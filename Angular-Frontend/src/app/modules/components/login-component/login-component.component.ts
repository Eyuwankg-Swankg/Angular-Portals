import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  @Input() login_image = '';
  @Input() portal_name = '';
  @Input() login_style_class :any= {};
  @Input() login_btn_styles :any= [];
  
  @Output() onLoginEvent: EventEmitter<any> = new EventEmitter();

  loginData: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private toaster: ToastrService,private router:Router) {}

  ngOnInit(): void {
    console.log(this.login_btn_styles);
    this.loginData = this.fb.group({
      UserID: '',
      Password: '',
    });
    this.toaster.info('Enter User ID and Password', '', {
      timeOut: 1000,
      onActivateTick: false,
      progressBar: false,
    });
    // this.loginData.valueChanges.subscribe(console.log);
  }

  onLogin(): void {
    this.onLoginEvent.emit(this.loginData.value);
  }
  
  goBack(): void{
    this.router.navigate([""]);
  }
}
