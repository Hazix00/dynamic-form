import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../../Inputs';

@Component({
  selector: 'input-render',
  templateUrl: './input-render.component.html',
  styleUrls: ['./input-render.component.scss'],
})
export class InputRenderComponent implements OnInit {

  @Input() input!: InputBase<any>;
  @Input() defaultValues!: any[];
  @Input() form!: FormGroup;
  @Output() onChange = new EventEmitter<any>();
  get isValid() {
    return this.form.controls[this.input.name].valid;
  }

  constructor(
    ) {}

  ngOnInit(): void {
    if (this.input.canEdit === false) {
      // this.form.controls[this.input.name].disable();
      // this.form.controls[this.input.name].setvalue(this.input.value);
    }

    // console.log(this.input);
    // console.log('this.defaultValues', this.defaultValues);
    // this.form.controls[this.input.name].setValue(this.input.value);
  }

}
