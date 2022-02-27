import { InputBase } from "./inputBase";

export class SliderInput extends InputBase<number> {
    override type = "slider"
    override name = "slider"
    override label = "Slider"
    override value = 0
    constructor() {
        super();
    }
}
