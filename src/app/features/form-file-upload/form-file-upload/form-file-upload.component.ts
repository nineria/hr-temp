import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { addResumeForm } from 'src/app/core/forms/addresume';
import { MultiSelect } from 'src/app/core/interfaces/MultiSelect';

@Component({
  selector: 'app-form-file-upload',
  templateUrl: './form-file-upload.component.html',
  styleUrls: ['./form-file-upload.component.scss'],
})
export class FormFileUploadComponent implements OnInit {
  formTitle: string = 'เพิ่มข้อมูล RESUME';

  departmentList: MultiSelect[] = [];
  positionList: MultiSelect[] = [];
  officerInChargeList: MultiSelect[] = [];

  addResumeForm: FormGroup = addResumeForm();

  constructor() {}

  get getResumeForm() {
    return this.addResumeForm.controls;
  }

  ngOnInit(): void {
    // mock แผนกที่สมัคร
    this.departmentList = [
      { id: 1, name: 'Developer', inputValue: '' },
      { id: 2, name: 'Design', inputValue: '' },
    ];
    // mock ตำแหน่ง
    this.positionList = [
      { id: 1, name: 'UX/UI', inputValue: '' },
      { id: 2, name: 'Motion Graphics', inputValue: '' },
      { id: 3, name: 'Temporary', inputValue: '' },
      { id: 4, name: 'Marketing', inputValue: '' },
    ];
    // mock ผู้รับผิดชอบ
    this.officerInChargeList = [
      { id: 1, name: 'สงวน ลิขสิทธิ์', inputValue: '' },
      { id: 2, name: 'ณรงค์ นัดใช้ปืน', inputValue: '' },
      { id: 3, name: 'ศักดิพันธ์ ชอบนอนหงาย', inputValue: '' },
      { id: 4, name: 'นิธินัย เหินเวหา', inputValue: '' },
      { id: 5, name: 'ไพรัตน์ หม้อน้ำร้อน', inputValue: '' },
      { id: 6, name: 'ลำเทียน จ้องผสมพันธุ์', inputValue: '' },
      { id: 7, name: 'บุญพอ มีเท', inputValue: '' },
      { id: 8, name: 'บุญศรัทธา มหามงคล', inputValue: '' },
    ];
  }

  onSubmit({ type, data }: any): void {
    switch (type) {
      case 'แผนกที่สมัคร':
        this.addResumeForm.get('departmentList')?.setValue(data);
        break;
      case 'ตำแหน่ง':
        this.addResumeForm.get('positionList')?.setValue(data);
        break;
      case 'ผู้รับผิดชอบ':
        this.addResumeForm.get('officerInChargeList')?.setValue(data);
        break;
      default:
        console.log('no data');
        break;
    }
  }

  onFormSubmit(event: MouseEvent) {
    event.preventDefault();

    if (this.addResumeForm.invalid) return;

    console.log(this.addResumeForm.value);
  }
}
