import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../../Inputs';

@Component({
    selector: 'group-input',
    templateUrl: './group-input.component.html',
    styleUrls: ['./group-input.component.scss'],
})
export class GroupInputComponent implements OnInit {
  @Input() input!: InputBase<any>;
  @Input() form!: FormGroup;
    ngOnInit(): void {
        console.log('this.form', this.input);
    }
}
