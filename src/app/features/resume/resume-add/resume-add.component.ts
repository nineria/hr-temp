import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { departmentList } from 'src/app/core/constants/departmentList';
import { managerList } from 'src/app/core/constants/managerList';
import { positionList } from 'src/app/core/constants/positionList';
import { addResumeForm } from 'src/app/core/forms/addresume';
import { ManagerList } from 'src/app/core/interfaces/managerList';
import { MultiSelect } from 'src/app/core/interfaces/MultiSelect';

@Component({
  selector: 'app-resume-add',
  templateUrl: './resume-add.component.html',
  styleUrls: ['./resume-add.component.scss'],
})
export class ResumeAddComponent {
  formTitle: string = 'เพิ่มข้อมูล RESUME';

  departmentList: MultiSelect[] = [];
  positionList: MultiSelect[] = [];
  managerList: ManagerList[] = [];

  form: FormGroup = addResumeForm();

  constructor() {}

  get getForm() {
    return this.form.controls;
  }

  ngOnInit(): void {
    // mock แผนกที่สมัคร
    this.departmentList = departmentList;
    // mock ตำแหน่ง
    this.positionList = positionList;
    // mock ผู้รับผิดชอบ
    this.managerList = managerList;
  }

  onSelect({ type, data }: any): void {
    switch (type) {
      case 'แผนกที่สมัคร':
        this.form.get('departmentList')?.setValue(data);
        break;
      case 'ตำแหน่ง':
        this.form.get('positionList')?.setValue(data);
        break;
      case 'ผู้รับผิดชอบ':
        this.form.get('managerList')?.setValue(data);
        break;
      default:
        console.log('no data');
        break;
    }
  }

  onSelectFile(event: any): void {
    this.form.get('file')?.setValue(event);
  }

  onFormSubmit(event: MouseEvent) {
    event.preventDefault();

    this.form.get('createdAt')?.setValue(Date.now());
    this.form.get('updatedAt')?.setValue(Date.now());
    this.form.get('status')?.setValue('รอรีวิว');
    this.form.get('averageScore')?.setValue('5.0/5.0');

    if (this.form.invalid) return;

    console.log(this.form.value);
  }
}
