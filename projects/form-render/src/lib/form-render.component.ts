import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    AbstractControlOptions,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { InputBase } from './Inputs/inputBase';
import { PanelInput } from './Inputs/panelInput';
import { PasswordInput } from './Inputs/passwordInput';

@Component({
    selector: 'form-render',
    templateUrl: './form-render.component.html',
    styleUrls: ['./form-render.component.scss'],
})
export class FormRenderComponent implements OnInit {
    @Input() inputs!: InputBase<any>[] | any[];
    @Input() defaultValues: InputBase<any>[] | any[] = [];
    @Input() submission!: Object;
    @Output() onSubmit = new EventEmitter<any>();

    formGroup!: FormGroup;

    payLoad = '';

    constructor() {}

    ngOnInit(): void {
        console.log(this.inputs);
        this.formGroup = this.toFormGroup();
        // this.formGroup.valueChanges.subscribe((data) => {
        //   console.log(this.formGroup);
        // });
    }

    ngOnChanges() {
        this.formGroup = this.toFormGroup();
    }

    toFormGroup() {
        const group: any = {};
        // console.log(this.inputs);
        this.inputs.forEach((input) => {
            //   console.log(input);
            if (
                input.type === 'password' &&
                (input as PasswordInput).confirmPassword
            ) {
                const subGroup: any = {};
                const passwordKey = input.name;
                const confirmKey = `${input.name}_confirm`;
                group[passwordKey] = new FormControl(
                    input.value || '',
                    this.getInputValidators(input)
                );
                group[confirmKey] = new FormControl('', [
                    ...this.getInputValidators(input),
                    (c) => {
                        // console.log(c)
                        if (
                            c!.errors &&
                            c!.errors!['mustMatch']
                        ) {
                            // return if another validator has already found an error on the matchingControl

                            return { invalid: true };
                        }

                        // set error on matchingControl if validation fails
                        if (
                            group[passwordKey]!.value !==
                            c!.value
                        ) {
                            // c!.setErrors({ mustMatch: true });
                            return { mustMatch: true };
                        } else {
                            console.log('Validation success');
                            c!.setErrors(null);
                            return null;
                        }
                    },
                ]);

                // group['passwords'] = new FormGroup(subGroup, (c) => {
                //     // console.log(c)
                //     if (
                //         c.get(confirmKey)!.errors &&
                //         c.get(confirmKey)!.errors!['mustMatch']
                //     ) {
                //         // return if another validator has already found an error on the matchingControl

                //         return { invalid: true };
                //     }

                //     // set error on matchingControl if validation fails
                //     if (
                //         c.get(passwordKey)!.value !== c.get(confirmKey)!.value
                //     ) {
                //         c.get(confirmKey)!.setErrors({ mustMatch: true });
                //         return { invalid: true };
                //     } else {
                //         console.log('Validation success');
                //         c.get(confirmKey)!.setErrors(null);
                //         return null;
                //     }
                // });
            } else {
                const addFormControlsRecursively = (input: InputBase<any>) => {
                    if (input.inputs && input.inputs.length > 0) {
                        // const subGroup: any = {};
                        group[input.name] = this.newFormControl(input);

                        input.inputs.forEach((subInput: InputBase<any>) => {
                            addFormControlsRecursively(subInput);
                        });
                    } else {
                        group[input.name] = this.newFormControl(input);
                    }
                };
                addFormControlsRecursively(input);
            }
        });
        return new FormGroup(group);
    }

    private newFormControl(input: InputBase<any>) {
        return new FormControl(
            input.value,
            input.validation ? this.getInputValidators(input) : null
        );
    }

    setFormGroupValue(data: { name: string; value: any }) {
        const { name, value } = data;
        console.log(name, value);
        // this.formGroup.controls[name].setValue(value);
    }

    getInputValidators(input: InputBase<any>) {
        const validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions =
            [];
        if (input.validation && input.validation.required)
            validators.push(Validators.required);
        return validators;
    }

    submit(): void {
        console.log(this.formGroup);
        if (this.formGroup.valid) {
            this.onSubmit.emit(this.formGroup.value);
            // console.log(this.formGroup.value, this.inputs);
        } else {
            console.log('Form is invalid');
        }

        // this.payLoad = JSON.stringify(this.formGroup.getRawValue());

        //validate form
    }
}
