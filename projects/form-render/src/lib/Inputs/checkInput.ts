import { InputBase } from "./inputBase";

export class CheckInput extends InputBase<boolean> {
    override type = "check"
    override name = "check"
    override label = "Check"
    override value = false

    constructor() {
        super()
    }
}
