import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { departmentList } from 'src/app/core/constants/departmentList';
import { managerList } from 'src/app/core/constants/managerList';
import { positionList } from 'src/app/core/constants/positionList';
import { addResumeForm } from 'src/app/core/forms/addresume';
import { ManagerList } from 'src/app/core/interfaces/managerList';
import { MultiSelect } from 'src/app/core/interfaces/MultiSelect';
import { jsonToFormData } from 'src/app/core/utils/form.util';

@Component({
  selector: 'app-candidate-add',
  templateUrl: './candidate-add.component.html',
  styleUrls: ['./candidate-add.component.scss'],
})
export class CandidateAddComponent implements OnInit {
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
    this.form.get('files')?.setValue([event]);
  }

  onFormSubmit() {
    // timestamp
    this.form.get('createdAt')?.setValue(Date.now());
    this.form.get('updatedAt')?.setValue(Date.now());

    // mockup data
    this.form.get('status')?.setValue('รอรีวิว');
    this.form.get('averageScore')?.setValue('5.0/5.0');

    if (this.form.invalid) return;

    const formData = new FormData();
    jsonToFormData(formData, this.form.value);

    formData.forEach((formValue, key) => {
      console.log(`${key} :  `, formValue);
    });

    console.log(this.form.value);
  }
}
