import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  elegantForm: FormGroup;
  username:string = '';
  password:string = '';
  post: any;

  constructor(public fb: FormBuilder, private router: Router) {
    this.elegantForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  addpost(post) {
    this.username = post.username;
    this.password = post.password;
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['/home'])
  }

}
