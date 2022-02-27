import { InputBase } from './inputBase';

export class TableColumn {
    field!: string;
    headerText!: string;
    width!: number;
    textAlign!: string;
    isPrimaryKey!: boolean;
    inputType!: string;
    dataSource!: Object[];
}

export class TableInput extends InputBase<Object[]> {
    override type = 'table';
    override name = 'table';
    override label = 'Table'
    columns: TableColumn[] = [];
    constructor() {
        super();
    }
}
