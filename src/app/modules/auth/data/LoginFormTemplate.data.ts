import { Validators } from "@angular/forms";
import { InputType } from "src/app/shared/models/enums/InputType.enum";
import { FormTemplate } from "src/app/shared/models/FormTemplate.model";

export const LoginFormTemplate: FormTemplate = {
    inputFields: [
        {
            label: 'Username',
            name: 'username',
            type: InputType.TEXT_INPUT,
            validators: [Validators.required]
        },
        {
            label: 'Giria',
            name: 'giria',
            type: InputType.DROPDOWN_INPUT,
            validators: [Validators.required],
            dropdownConfig: {
                options: [
                    { name: 'Yolo', giria: 'Swag' },
                    { name: 'Swag', giria: 'Yolo' }
                ],
                optionLabel: 'name',
                optionValue: 'giria'
            }
        }
    ],
}