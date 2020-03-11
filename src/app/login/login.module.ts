import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NgZorroAntdModule, NzIconModule , NzInputModule } from 'ng-zorro-antd';
const router: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule, NzButtonModule, NzIconModule , NzInputModule, FormsModule,
        RouterModule.forChild(router)
    ]
})
export class LoginModule { }
