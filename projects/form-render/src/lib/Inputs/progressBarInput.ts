import { InputBase } from "./inputBase";

export class ProgressBarInput extends InputBase<number> {
    override type = "progressbar"
    override name = "progressbar"
    override label = "Progress"
    constructor() {
        super();
    }
}
