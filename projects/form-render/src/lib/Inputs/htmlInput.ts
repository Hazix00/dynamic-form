import { InputBase } from './inputBase';

export class HtmlInput extends InputBase<string> {
    override type = 'htmlelement';
    override name = 'html'
    override label = 'Html'
    tag?: string = 'p';
    attrs?: {
        attr: string;
        value: string;
    }[];
    content?: string = 'HTML'

    constructor() {
        super();
    }
}
