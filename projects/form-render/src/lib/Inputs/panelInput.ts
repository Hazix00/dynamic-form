import { InputBase } from './inputBase';

export class PanelInput extends InputBase<any> {
    override type = 'panel';
    override name = 'panel'
    override label = 'Panel'
    expanded? = false;
    hideToggle? = false;
    titleIsCheckbox? = false;
    isLeaf? = false;

    constructor() {
        super();
    }
}
