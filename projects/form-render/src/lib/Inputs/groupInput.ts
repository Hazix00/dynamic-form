import { InputBase } from "./inputBase";


export class GroupInput extends InputBase<void> {
    override type = "input-group"
    override name = "container"
    override label = "Container"
    override inputs = new Array<InputBase<any>>()

    constructor() {
        super()
    }

}
