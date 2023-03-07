import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { addResumeForm } from 'src/app/core/forms/addresume';
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
  officerInChargeList: MultiSelect[] = [];

  addResumeForm: FormGroup = addResumeForm();

  submitted: boolean = false;

  constructor() {}

  get getResumeForm() {
    return this.addResumeForm.controls;
  }

  ngOnInit(): void {
    // mock แผนกที่สมัคร
    this.departmentList = [
      { id: 1, name: 'Developer' },
      { id: 2, name: 'Design' },
    ];
    // mock ตำแหน่ง
    this.positionList = [
      { id: 1, name: 'UX/UI' },
      { id: 2, name: 'Motion Graphics' },
      { id: 3, name: 'Temporary' },
      { id: 4, name: 'Marketing' },
    ];
    // mock ผู้รับผิดชอบ
    this.officerInChargeList = [
      {
        id: 1,
        name: 'สงวน ลิขสิทธิ์',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 2,
        name: 'ณรงค์ นัดใช้ปืน',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 3,
        name: 'ศักดิพันธ์ ชอบนอนหงาย',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 4,
        name: 'นิธินัย เหินเวหา',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 5,
        name: 'ไพรัตน์ หม้อน้ำร้อน',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 6,
        name: 'ลำเทียน จ้องผสมพันธุ์',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 7,
        name: 'บุญพอ มีเท',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      {
        id: 8,
        name: 'บุญศรัทธา มหามงคล',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      },
    ];
  }

  onSelect({ type, data }: any): void {
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
    this.submitted = true;

    this.addResumeForm.get('createdAt')?.setValue(Date.now());
    this.addResumeForm.get('updatedAt')?.setValue(Date.now());
    this.addResumeForm.get('status')?.setValue('รอรีวิว');
    this.addResumeForm.get('averageScore')?.setValue('5.0/5.0');

    if (this.addResumeForm.invalid) {
      this.submitted = false;
      return;
    }

    console.log(this.addResumeForm.value);
  }
}
