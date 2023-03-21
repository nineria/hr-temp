import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss'],
})
export class DocumentUploadComponent {
  title: string = 'อัพโหลดเอกสาร';

  loading: boolean = false;

  fileName: string = '';
  fileThumbnail: string = '';

  file: File | undefined;

  @Input()
  getForm: any = [];

  @Output()
  onSelectFileEmit: EventEmitter<File | undefined> = new EventEmitter<
    File | undefined
  >();

  isSelectedFile: boolean = false;

  onSelectFile(event: any): void {
    this.isSelectedFile = false;
    const file: File = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.fileThumbnail = reader.result as string;
    };

    this.fileName = file.name;
    this.onSelectFileEmit.emit(file);

    event.target.value = '';
  }

  onClearFile(): void {
    this.fileName = '';
    this.fileThumbnail = '';
    this.isSelectedFile = true;
    this.onSelectFileEmit.emit();
  }
}
