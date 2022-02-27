import { InputBase } from './inputBase';

export class TreeInput extends InputBase<any[]> {
    override type = 'tree-checkbox';
    override name = 'tree-checkbox';
    override label = 'Tree Checkbox';

    constructor() {
        super();
    }
}
