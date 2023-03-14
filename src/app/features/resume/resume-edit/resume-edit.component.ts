import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { departmentList } from 'src/app/core/constants/departmentList';
import { managerList } from 'src/app/core/constants/managerList';
import { positionList } from 'src/app/core/constants/positionList';
import { addResumeForm } from 'src/app/core/forms/addresume';
import { ManagerList } from 'src/app/core/interfaces/managerList';
import { MultiSelect } from 'src/app/core/interfaces/MultiSelect';

@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.scss'],
})
export class ResumeEditComponent {
  formTitle: string = 'แก้ไขข้อมูล';

  interviewerInfo: any;

  departmentList: MultiSelect[] = [];
  positionList: MultiSelect[] = [];
  managerList: ManagerList[] = [];

  form: FormGroup = addResumeForm();

  constructor() {}

  get getForm() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.interviewerInfo = {
      id: '1X35b',
      name: 'ป้าใจ',
      surname: 'ดวงดี',
      nickname: 'ป้าใจ',
      phoneNumber: 123456789,
      email: '123@kalaland.com',
      other: '',
      status: 'รอสัมภาษณ์',
      averageScore: '4.0/5.0',
      departmentList: [
        {
          id: 1,
          name: 'Developer',
        },
      ],
      positionList: [
        {
          id: 1,
          name: 'UX/UI',
        },
      ],
      managerList: [
        {
          id: 4,
          name: 'นิธินัย เหินเวหา',
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          position: 'CEO',
        },
        {
          id: 1,
          name: 'สงวน ลิขสิทธิ์',
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          position: 'manager',
        },
      ],
      createdAt: 1678179449539,
      updatedAt: 1678179449539,
    };

    // mock แผนกที่สมัคร
    this.departmentList = departmentList;
    // mock ตำแหน่ง
    this.positionList = positionList;
    // mock ผู้รับผิดชอบ
    this.managerList = managerList;

    // this.form.get('departmentList')?.setValue(data);
    // this.form.get('positionList')?.setValue(data);
    // this.form.get('managerList')?.setValue(data);
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
    this.form.get('createdAt')?.setValue(Date.now());
    this.form.get('updatedAt')?.setValue(Date.now());
    this.form.get('status')?.setValue('รอรีวิว');
    this.form.get('averageScore')?.setValue('5.0/5.0');

    if (this.form.invalid) return;

    console.log(this.form.value);
  }
}
