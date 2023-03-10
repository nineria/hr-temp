import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss'],
})
export class ResumeViewComponent implements OnInit {
  userDetail: any;

  constructor() {}

  ngOnInit(): void {
    this.userDetail = {
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
  }
}
