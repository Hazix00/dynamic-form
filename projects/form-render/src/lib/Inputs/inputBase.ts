export class InputBase<T> {
    _id?: string
    _v?: number
    value: T | T[] | null = null;
    values!: T[];
    config?: any = null;
    self?: boolean = false;
    static: boolean = true;
    inputs?: InputBase<T>[] = [];
    status: string = 'pending';
    createdBy: string = '';
    userType: string[] = [];
    validation: {
        required: boolean;
    } = { required: false };
    type!: string;
    name!: string;
    label!: string;
    hideLabel: boolean = false;
    classes: string[] = [];
    createdAt?: Date;
    updatedAt?: Date;
    canEdit: boolean = true;
    inline: boolean = false;

    placeholder?: string = '';

    constructor() {
        // this.createdAt = new Date();
    }
}
