import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupCheckInput } from '../../Inputs';

@Component({
    selector: 'group-check-input',
    templateUrl: './group-check-input.component.html',
    styleUrls: ['./group-check-input.component.scss'],
})
export class GroupCheckInputComponent implements OnInit {
    @Input() input!: GroupCheckInput;
    @Input() form!: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.setValue()
    }

    setValue() {
        const value: {[key: string]: boolean} = {}
        this.input.values.forEach( v => {
            value[v.name] = v.value
        })
        this.form.get(this.input.name)?.setValue(value)
        console.log(this.form)
    }


}
