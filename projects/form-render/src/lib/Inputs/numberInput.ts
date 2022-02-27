import { InputBase } from "./inputBase";

export class NumberInput extends InputBase<number> {
    override type = "number"
    override name = "number"
    override label = "Number"

    constructor() {
        super();
    }
}
