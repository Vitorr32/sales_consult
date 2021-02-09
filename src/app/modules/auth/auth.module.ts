import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AuthenticationRoutingModule } from './auth.routing';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthenticationRoutingModule
    ]
})
export class AuthenticationModule { }
