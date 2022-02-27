import { InputBase } from './inputBase';

export class TelInput extends InputBase<boolean> {
    override type = 'tel';
    override name = 'telephone'
    override label = 'Télèphone'
    constructor() {
        super();
    }
}
