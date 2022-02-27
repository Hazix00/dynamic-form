import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { orderDetails } from './data';

import {
  EditService,
  ToolbarService,
  PageService,
  DialogEditEventArgs,
  SaveEventArgs,
} from '@syncfusion/ej2-angular-grids';

import { FormGroup } from '@angular/forms';
import { TableInput } from '../../Inputs';

@Component({
  selector: 'table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.scss'],
  providers: [ToolbarService, EditService, PageService],
})
export class TableInputComponent implements OnInit {

  @Input() input!: TableInput
  @Input() public values: Object[] = [];
  @Input() public editSettings: Object = {};
  @Input() public toolbar: string[] = [];
  @Input() public pageSettings: Object = {};
  @Input() public allowPaging = false;
  public orderData!: IOrderModel;

  @ViewChild('theForm')
  public orderForm!: FormGroup;
  // @ViewChild('OrderID')
  // public orderID!: ElementRef;
  // @ViewChild('CustomerName')
  // public customerName!: ElementRef;

  public ngOnInit(): void {


  }

  actionBegin(args: SaveEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      //   console.log(args);
      if (this.orderForm.valid) {
        args.data = this.orderData;
      } else {
        args.cancel = true;
      }
    }
  }

  actionComplete(args: DialogEditEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      // Set initail Focus
      if (args.requestType === 'beginEdit') {
        (
          args.form?.elements.namedItem('CustomerName') as HTMLInputElement
        ).focus();
      } else if (args.requestType === 'add') {
        (args.form?.elements.namedItem('OrderID') as HTMLInputElement).focus();
      }
      //   console.log(args);
    }
  }

  public focusIn(target?: any): void {
    target?.parentElement?.classList.add('e-input-focus');
  }

  public focusOut(target?: any): void {
    target?.parentElement?.classList.remove('e-input-focus');
  }


  onuploadSuccess(args: any) {

  }
  onFileUpload(args: any) {

  }

  onuploadFailed(args: any) {

  }

}
export interface IOrderModel {
  OrderID?: number;
  CustomerName?: string;
  ShipCity?: string;
  OrderDate?: Date;
  Freight?: number;
  ShipCountry?: string;
  ShipAddress?: string;
  Document?: any;
}

