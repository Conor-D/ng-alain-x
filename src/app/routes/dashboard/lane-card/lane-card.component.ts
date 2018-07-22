import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lane-card',
  templateUrl: './lane-card.component.html',
  styles: [`
    nz-card {
      margin-bottom: 8px !important;
    }
    nz-card nz-tag {
      vertical-align: text-bottom;
    }
    nz-card h3 {
      font-weight: bold;
    }
    nz-card ::ng-deep .ant-card-head-wrapper {
      height: 48px;
    }
    nz-card ::ng-deep .ant-card-head-title {
      padding: 12px 0;
      font-family: "Microsoft YaHei";
    }
    nz-card ::ng-deep .ant-card-extra {
      padding: 12px 0;
      font-size: 12px;
      line-height: 24px;
    }
    nz-card ::ng-deep .ant-card-body {
      padding: 16px;
    }
    .lane-card-content ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .lane-card-info li {
      line-height: 24px;
    }
    .lane-card-info li span {
      display: inline-block;
      width: 72px;
    }
    .lane-card-img-wrapper {
      height: 100px;
    }
    .lane-card-img-wrapper .img-pointer {
      flex-direction: column;
      margin: 0 8px;
    }
    .lane-card-img-wrapper .img-pointer li {
      width: 8px;
      height: 8px;
      border: 1px solid #ddd;
    }
    .lane-card-img-wrapper .img-pointer li.active {
      background: #1890ff;
      border: 0;
    }
    .lane-card-img-wrapper .img-view {
      width: 160px;
      background: #f6f6f6;
      border: 1px solid #ebebeb;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .lane-card-img-wrapper .img-view i {
      font-size: 50px;
      color: #ddd;
    }
  `]
})
export class LaneCardComponent implements OnInit {
  @Input('lane') lane;
  constructor() { }

  ngOnInit() {

  }

}
