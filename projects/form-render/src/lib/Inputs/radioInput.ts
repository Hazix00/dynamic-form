import { InputBase } from './inputBase';


export class RadioInput extends InputBase<{label: string; value: string}> {
    override type = 'radio';
    override name = 'radio'
    override label = 'Radio'
    override values = [{label: 'Value1', value: 'value1'}]
    constructor() {
        super();
    }
}
