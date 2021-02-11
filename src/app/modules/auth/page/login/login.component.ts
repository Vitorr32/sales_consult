import { Component, OnInit } from '@angular/core';
import { FormTemplate } from 'src/app/shared/models/FormTemplate.model';
import { LoginFormTemplate } from '../../data/LoginFormTemplate.data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormTemplate: FormTemplate = LoginFormTemplate;

  constructor() { }

  ngOnInit(): void {
  }

}
