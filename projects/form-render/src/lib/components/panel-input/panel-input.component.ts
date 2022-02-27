import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PanelInput } from '../../Inputs/panelInput';

@Component({
  selector: 'panel-input',
  templateUrl: './panel-input.component.html',
  styleUrls: ['./panel-input.component.scss'],
})
export class PanelInputComponent implements OnInit {
  @Input() input!: PanelInput;
  @Input() form!: FormGroup;
  @Input() defaultValues!: any[];

  constructor() {}

  ngOnInit(): void {}

  checkClicks(e: Event): void {
    e.stopPropagation();
    console.log(e);
  }

  handleChange(e: any) {
    console.log(this.input.name, e.checked);
    this.form.get(this.input.name)?.setValue(e.checked);
  }

  handleExpand() {
    console.log(this.form.get(this.input.name));
    if (
      this.input.titleIsCheckbox &&
      this.form.get(this.input.name)?.value === false
    ) {
      this.input.expanded = false;
    }
  }
  handleCollapse() {
    console.log(this.form.get(this.input.name));
    if (
      this.input.titleIsCheckbox &&
      this.form.get(this.input.name)?.value === true
    ) {
      this.input.expanded = true;
    }
  }
}
