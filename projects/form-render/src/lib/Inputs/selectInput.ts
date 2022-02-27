import { InputBase } from "./inputBase";

export class SelectInput extends InputBase<{ label: string, value: string }[]> {
    override type = "select"
    override name = "select"
    override label = "Select"

    constructor() {
        super();
    }
}
