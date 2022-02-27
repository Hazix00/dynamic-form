import { InputBase } from "./inputBase";

export class PasswordInput extends InputBase<string> {
    override type = "password"
    override name = "password"
    override label = "Password"
    confirmPassword: boolean = false
    confirmPasswordLabel = ''

    constructor() {
        super();
    }
}
