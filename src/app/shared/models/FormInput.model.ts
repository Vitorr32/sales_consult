import { InputType } from "./enums/InputType.enum";

export class FormInput {
    //The type of the input to be rendered
    type: InputType;
    //The name of the input and control name, the resulting object of the form will use this name as key of the object
    name: string;
    //Label that will appear above the input
    label: string;
    //Default value of the input, before the user interact with it
    defaultValue?: any;
    //Fallback value of the input, if the input is empty, what value should be put in the form object?
    fallbackValue?: any;
    //If two or more inputs should be 'grouped' together in the same line, set the same group name
    group?: string;
    //The placeholder of the input, when the input is empty the placeholder in render indicating what should the user input
    placeholder?: string;
    //In case that is a dropdown , what are the options to chose?
    options?: any[];
    //The validators of this input, functions that receive the control as parameter and verify if the value is valid
    validators?: any[];
}