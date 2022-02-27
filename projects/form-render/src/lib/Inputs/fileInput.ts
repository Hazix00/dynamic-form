import { InputBase } from './inputBase';

export class FileInput extends InputBase<string> {
    override type = 'file';
    override name = 'file';
    override label = 'File'
    displayImage?: boolean = false;
    imageSide?: 'Right' | 'Left' = 'Right';
    filesExtensions?: string[] = [];
    url?: string = "";

    constructor() {
        super()
    }
}
