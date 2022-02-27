import { GroupCheckInput } from './groupCheckInput';
import { ButtonInput } from './buttonInput';
import { CheckInput } from './checkInput';
import { DateInput } from './dateInput';
import { EmailInput } from './emailInput';
import { FileInput } from './fileInput';
import { GroupInput } from './groupInput';
import { HtmlInput } from './htmlInput';
import { InputBase } from './inputBase';
import { NumberInput } from './numberInput';
import { PanelInput } from './panelInput';
import { PasswordInput } from './passwordInput';
import { ProgressBarInput } from './progressBarInput';
import { RadioInput } from './radioInput';
import { SelectInput } from './selectInput';
import { SliderInput } from './sliderInput';
import { TableInput } from './tableInput';
import { TelInput } from './telInput';
import { TextAreaInput } from './textareaInput';
import { TextInput } from './textInput';
import { TreeInput } from './treeInput';

export class InputCreator {
    static createInput(
        type: string
    ):
        | TextInput
        | NumberInput
        | PasswordInput
        | DateInput
        | EmailInput
        | FileInput
        | GroupInput
        | HtmlInput
        | PanelInput
        | ProgressBarInput
        | RadioInput
        | SelectInput
        | SliderInput
        | TableInput
        | TelInput
        | TreeInput
        | TextAreaInput
        |GroupCheckInput {
        console.log('create',type);
        switch (type) {
            case 'text':
                return new TextInput();
            case 'number':
                return new NumberInput();
            case 'password':
                return new PasswordInput();
            case 'date':
                return new DateInput();
            case 'email':
                return new EmailInput();
            case 'check':
                return new CheckInput();
            case 'file':
                return new FileInput();
            case 'group':
                return new GroupInput();
            case 'htmlelement':
                return new HtmlInput();
            case 'panel':
                return new PanelInput();
            case 'progressbar':
                return new ProgressBarInput();
            case 'radio':
                return new RadioInput();
            case 'select':
                return new SelectInput();
            case 'slider':
                return new SliderInput();
            case 'textarea':
                return new TextAreaInput();
            case 'table':
                return new TableInput();
            case 'tel':
                return new TelInput();
            case 'tree-checkbox':
                return new TreeInput();
            case 'button':
                return new ButtonInput();
            case 'groupcheck':
                return new GroupCheckInput();
            default:
                return new InputBase<any>();
        }
    }
}
