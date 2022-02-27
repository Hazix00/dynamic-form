import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormRenderService {
  constructor(@Inject('config') public config: any) {
    console.log(config);
  }
}
