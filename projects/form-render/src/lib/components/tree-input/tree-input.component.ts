import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { NzInputGroupSlotComponent } from 'ng-zorro-antd/input';
// import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
    selector: 'tree-input',
    templateUrl: './tree-input.component.html',
    styleUrls: ['./tree-input.component.scss'],
})
export class TreeInputComponent implements OnInit {

    @Input() form!: FormGroup;
    @Input() inputName!: string
    @Input() data!: any[]
    constructor() {}

    ngOnInit(): void {}

    nzEvent(event: any): void {
        // console.log(event, input);
        // console.log(event.nodes);
        // if (event.node?.parentNode) {

        // }
        const childNodes =
            event.nodes?.map((x: any) => this.nzGetAllChildrenKeys(x)) || [];
        console.log(childNodes.flat(Infinity));

        this.form.controls[this.inputName].setValue(childNodes.flat(Infinity));
    }

    nzGetAllChildrenKeys(node: any): any {
        let result: any[] = [];
        result.push(node?.key);
        if (node?._children?.length > 0) {
            result.push(
                node?._children?.map((item: any) => {
                    return this.nzGetAllChildrenKeys(item);
                })
            );
        }

        return result;

        // return this.nzGetAllChildrenKeys(node);
    }
}
