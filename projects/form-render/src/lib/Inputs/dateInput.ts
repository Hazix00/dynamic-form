import { InputBase } from "./inputBase";

export class DateInput extends InputBase<Date> {
    override type = "date"
    override name = "date"
    override label = "Date"

    constructor() {
        super()
    }
}
