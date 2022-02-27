import { InputBase } from './inputBase';


export class GroupCheckInput extends InputBase<{label: string,name: string,value: boolean}> {
    override type = 'groupcheck';
    override name = 'groupcheck'
    override label = 'Groupe Check'
    override values = [
        {
            label: 'Check1',
            name: 'check1',
            value: false
        }
    ]
    constructor() {
        super();
    }
}
