import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { FilesService } from 'src/app/services/files/files.service';
import { FileInput } from '../../Inputs/fileInput';

@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @Input() input!: FileInput
  @Input() form!: FormGroup

  constructor(
    // private readonly filesService: FilesService
    ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    // console.log(this.input, event);
    // const isImageInput =
    //   this.input?.filesExtensions?.includes('.png') ||
    //   this.input?.filesExtensions?.includes('.jpg') ||
    //   this.input?.filesExtensions?.includes('.jpeg');
    // if (isImageInput) {
    //   this.filesService.uploadImage(event.target.files[0]).subscribe({
    //     next: (response) => {
    //       console.log(event.target.name);
    //       console.log(response);
    //       if (response?.data) {
    //         this.form.controls[this.input.name].setValue(response.data);
    //       }
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {},
    //   });
    // }
  }

}
