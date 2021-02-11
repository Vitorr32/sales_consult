import { ɵComponentType } from "@angular/core";
import { ActionType } from "./enums/ActionType.enum";
import { FormInput } from "./FormInput.model";

export class FormTemplate {
    //Optional Form Title to render at the top of the form
    title?: string;
    //Optional theme for the form, they can be configured in the styles of the form template component, defaults do 'main'
    theme?: string;
    //An array of inputs that will be rendered in the form
    inputFields: FormInput[];
    // Any type of extra actions beside the submit may be specified in this array
    extraActions?: {
        //The type of action that this new button will trigger
        type: ActionType,
        //Whetever there's a specific condition for this action to be shown to the user
        condition?: (injectedData: any) => boolean;
        //In case of an modal action type, the details of the modal
        modal?: {
            component: ɵComponentType<any>;
            dimensions?: string[];
            onClose: (modalReturn, component) => any;
        }
        //An optional icon shape to be rendered at the side of the label
        icon?: string;
        //An optional label for the button
        label?: string;
    }[]
    // Custom validation functions that take into account more than one specific input
    formValidators?: any[];
}