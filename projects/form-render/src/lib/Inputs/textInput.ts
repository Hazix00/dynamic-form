import { InputBase } from './inputBase';

export class TextInput extends InputBase<string> {
    override type = 'text';
    override name = 'text'
    override label = 'Texte'
    constructor() {
        super();
    }
}
