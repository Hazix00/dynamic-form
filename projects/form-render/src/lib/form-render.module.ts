import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from './modules/material.module';
import { SyncFusionModule } from './modules/sync-fusion.module';

import { FormRenderService } from './form-render.service';

import { FilenameOnlyDirective } from './directives/filename-only.directive';

import { FormRenderComponent } from './form-render.component';
import { GroupCheckInputComponent } from './components/group-check-input/group-check-input.component';
import { InputRenderComponent } from './components/input-render/input-render.component';
import { TreeInputComponent } from './components/tree-input/tree-input.component';
import { GroupInputComponent } from './components/group-input/group-input.component';
import { PanelInputComponent } from './components/panel-input/panel-input.component';
import { HtmlInputComponent } from './components/html-input/html-input.component';
import { TableInputComponent } from './components/table-input/table-input.component';
import { FileInputComponent } from './components/file-input/file-input.component';

const elements = [
    FormRenderComponent,
    InputRenderComponent,
    TreeInputComponent,
    GroupInputComponent,
    PanelInputComponent,
    FilenameOnlyDirective,
    HtmlInputComponent,
    TableInputComponent,
    FileInputComponent,
    GroupCheckInputComponent,
];

@NgModule({
    declarations: elements,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialDesignModule,
        SyncFusionModule,
    ],
})
export class FormRenderModule {
  static forRoot(configuration: any): ModuleWithProviders<any> {
    console.log(configuration);
    return {
      ngModule: FormRenderModule,
      providers: [FormRenderService,{provide: 'config', useValue: configuration}]
    };
  }
}
