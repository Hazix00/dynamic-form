import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormRenderService } from '../form-render.service';

@Injectable({
  providedIn: 'root',
})
export class FilesService {

  constructor(
    private readonly http: HttpClient,
    private readonly formRenderService: FormRenderService
  ) {}

  uploadPdf(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('pdf', file);
    return this.http.post(`${ this.formRenderService.config.ftpUrl }/upload-pdf`, formData, {
      headers: {
        Authorization: `Bearer ${this.formRenderService.config.TOKEN}`,
      },
    });
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('img', file);
    return this.http.post(`${ this.formRenderService.config.ftpUrl }/upload-image`, formData, {
      headers: {
        Authorization: `Bearer ${this.formRenderService.config.TOKEN}`,
      },
    });
  }
}
