import { NgModule } from '@angular/core';

import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

const modules = [
    CheckBoxModule,
    DropDownListAllModule,
    UploaderModule,
    DatePickerAllModule,
    ToolbarModule,
    NumericTextBoxAllModule,
    DialogModule,
    GridAllModule,
];

@NgModule({
    imports: modules,
    exports: modules,

})
export class SyncFusionModule {}
