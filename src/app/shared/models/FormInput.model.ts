import { InputType } from "./enums/InputType.enum";

export class FormInput {
    //The type of the input to be rendered
    type: InputType;
    //The name of the input and control name, the resulting object of the form will use this name as key of the object
    name: string;
    //Label that will appear above the input
    label: string;
    //An string detailing what type of mask should be appplied to the user input
    mask?: string;
    //Default value of the input, before the user interact with it
    defaultValue?: any;
    //Fallback value of the input, if the input is empty, what value should be put in the form object?
    fallbackValue?: any;
    //If two or more inputs should be 'grouped' together in the same line, set the same group name
    group?: string;
    //The placeholder of the input, when the input is empty the placeholder in render indicating what should the user input
    placeholder?: string;
    //The dropdown has some nescessary configurations that need to be defined here, otherwise the value is not necessary
    dropdownConfig?: {
        //In case that is a dropdown , what are the options to chose?
        options: any[];
        //If the options object has an specific key to be used as the label of the option, otherwiser the value in the key
        //'label' is going to be used
        optionLabel?: string
        //If the options object has an specific key to be used as the value of the option, otherwiser the value in the key
        //'value' is going to be used
        optionValue?: string
    };
    //The validators of this input, functions that receive the control as parameter and verify if the value is valid
    validators?: any[];
}