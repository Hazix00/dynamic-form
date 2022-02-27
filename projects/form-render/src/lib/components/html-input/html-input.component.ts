import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HtmlInput } from '../../Inputs';

@Component({
  selector: 'html-input',
  templateUrl: './html-input.component.html',
  styleUrls: ['./html-input.component.scss']
})
export class HtmlInputComponent implements OnInit {
  @ViewChild('container', { static: true }) public elementContainer!: ElementRef;
  @Input() input!: HtmlInput

  constructor() { }

  ngOnInit(): void {
    const newElement = document.createElement(this.input.tag!)

    newElement.innerHTML = this.input.content!
    this.elementContainer.nativeElement.appendChild(newElement)
  }

}
