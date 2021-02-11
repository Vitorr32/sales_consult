import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormInput } from '../../models/FormInput.model';
import { FormTemplate } from '../../models/FormTemplate.model';

interface GroupedInput {
  name: string,
  inputs: FormInput[]
}

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  @Input()
  public formTemplateData: FormTemplate;

  @Output()
  public errorOnSubmitEvent = new EventEmitter<string>();
  @Output()
  public sucessfulSubmitEvent = new EventEmitter<any>();
  @Output()
  public onActionTriggeredEvent = new EventEmitter<any>();

  public searchFormGroup: FormGroup;
  public groupedInputs: GroupedInput[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (!this.formTemplateData) {
      return;
    }

    this.searchFormGroup = this.buildFormGroup(this.formTemplateData);
    this.groupedInputs = this.groupInputFields(this.formTemplateData);
  }

  private buildFormGroup(templateData: FormTemplate): FormGroup {
    const formGroupInputs: any = {};

    templateData.inputFields.forEach(inputField => {
      formGroupInputs[inputField.name] = [inputField.defaultValue || '', inputField.validators || null];
    })

    return this.formBuilder.group(
      formGroupInputs,
      { validators: templateData.formValidators }
    )
  }

  public groupInputFields(formTemplate: FormTemplate): GroupedInput[] {
    const groupedInputs = [];

    formTemplate.inputFields.forEach(inputField => {
      const index = groupedInputs.findIndex(group => group.name && group.name === inputField.group);

      if (index !== -1) {
        groupedInputs[index].inputs.push(inputField);
        return;
      }

      groupedInputs.push({ name: inputField.name, inputs: [inputField] });
    })

    return groupedInputs;
  }

}
