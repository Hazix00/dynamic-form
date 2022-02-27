import { InputBase } from './inputBase';

export class TextAreaInput extends InputBase<string> {
    override type = 'textarea';
    override name = 'textarea'
    override label = 'Texte Area'

    rows?: number = 3

    constructor() {
        super();
    }
}
