import { InputBase } from './inputBase';

export class ButtonInput extends InputBase<string> {
    override type: 'button' | 'submit' | 'reset' = 'button';
    action: string = ''

    override value: string = 'Button'
    override label: string = 'Button'
    override name: string = 'Button'
    constructor() {
        super()
    }
}
