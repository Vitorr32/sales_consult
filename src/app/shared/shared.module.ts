import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormTemplateComponent
    ],
    imports: [
        CommonModule,
        InputTextModule,
        InputMaskModule,
        DropdownModule,
        ReactiveFormsModule,
    ],
    exports: [
        FormTemplateComponent
    ]
})
export class SharedModule { }
