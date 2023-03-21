import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss'],
})
export class CandidateDetailComponent implements OnInit {
  candidate: any;

  constructor() {}

  ngOnInit(): void {
    this.fetchCandidateUserDetail();
  }

  fetchCandidateUserDetail() {
    // form API
    this.candidate = {
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
      isResumeVoted: true,
      isInterviewed: true,
      managerList: [
        {
          id: 4,
          name: 'นิธินัย เหินเวหา',
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          position: 'CEO',
          isResumePassed: true,
          resumeScore: 4.5,
          resumeReview: 'มีปสก น่าสนใจ',
          isInterviewPassed: true,
          interviewScore: [
            {
              label: 'Hard Skills',
              score: 3.5,
            },
            {
              label: 'Soft Skills',
              score: 4.0,
            },
            {
              label: 'Mindset Skills',
              score: 3.0,
            },
          ],
          interviewReview:
            "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
        },
        {
          id: 1,
          name: 'สงวน ลิขสิทธิ์',
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          position: 'manager',
          isResumePassed: false,
          resumeScore: 3.0,
          resumeReview: 'ดูไม่เข้ากับองค์กร',
          isInterviewPassed: true,
          interviewScore: [
            {
              label: 'Hard Skills',
              score: 3.5,
            },
            {
              label: 'Soft Skills',
              score: 4.0,
            },
            {
              label: 'Mindset Skills',
              score: 3.0,
            },
          ],
          interviewReview:
            "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
        },
      ],
      createdAt: 1678179449539,
      updatedAt: 1678179449539,
      files: [
        {
          name: 'Resume.pdf',
        },
        {
          name: 'CV.pdf',
        },
      ],
    };
  }
}
