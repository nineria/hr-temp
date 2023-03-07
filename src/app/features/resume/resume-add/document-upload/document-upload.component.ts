import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
})
export class DocumentUploadComponent implements OnInit {
  header: string = 'อัพโหลดเอกสาร';
  loading: boolean = false;
  file: File | undefined;
  fileThumbnail!: string | ArrayBuffer | null;

  @Input()
  getForm: any = [];

  @Input()
  submitted!: boolean;

  isSelectedFile: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSelectFile(event: any): void {
    this.isSelectedFile = false;
    this.file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => (this.fileThumbnail = reader.result);

    reader.readAsDataURL(this.file!);

    this.fileThumbnail = URL.createObjectURL(event.target.files[0]);
    console.log('this.file', URL.createObjectURL(event.target.files[0]));

    event.target.value = '';
  }

  onClearFile(): void {
    this.file = undefined;
    this.isSelectedFile = true;
  }
}
