import { InputBase } from "./inputBase";

export class EmailInput extends InputBase<string> {
    override type = "email"
    override name = "email"
    override label = "Email"

    constructor() {
        super();
    }
}
