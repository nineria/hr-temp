import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss'],
})
export class ResumeListComponent implements OnInit {
  tabTitle: boolean = true;

  tableMockup: any[] = [];

  ngOnInit(): void {
    this.tableMockup = [
      {
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
      },
      {
        id: '1X36b',
        name: 'ป้าเฉื่อย',
        surname: 'เอื้อยอ้าย',
        nickname: 'ป้าเฉื่อย',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '5.0/5.0',

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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
      {
        id: '1X37b',
        name: 'ป้าสั่ง',
        surname: 'ผัวตำ',
        nickname: 'ป้าสั่ง',
        phoneNumber: 123456789,
        email: '123@kalaland.com',
        other: '',
        status: 'รอรีวิว',
        averageScore: '1.0/5.0',

        departmentList: [
          {
            id: 1,
            name: 'Marketing',
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
      },
    ];
  }
}
