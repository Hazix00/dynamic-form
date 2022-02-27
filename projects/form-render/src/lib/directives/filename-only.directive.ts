import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appFilenameOnly]'
})
export class FilenameOnlyDirective {

  constructor(private model: NgControl) { }

  @HostListener('input') inputChange() {
    if( ! ( this.model.value.includes('/') || this.model.value.includes('\\') ) ) {
      return
    }
    let sep = ''
    if(this.model.value.includes('/')) {
      sep = '/'
    }
    else {
      sep = '\\'
    }
    const parts = this.model.value.split(sep);
    const newValue = parts[parts.length - 1];
    this.model.valueAccessor!.writeValue(newValue);
    console.log('filename directive executed')
  }

}
