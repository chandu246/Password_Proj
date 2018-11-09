import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy  {
  private returnUrl: string;
private subs: Array<Subscription> = [];

private error = '';

private loginForm: FormGroup;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });}
  ngOnInit() {
  }

  public showLoginForm() {
    return true;
  }

  ngOnDestroy() {
  this.subs.forEach(sub => sub.unsubscribe());
}

returnUserToPage() {
  this.router.navigateByUrl(this.returnUrl);
}

public submit({value}) {
}
  }
