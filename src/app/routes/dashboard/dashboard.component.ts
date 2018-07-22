import { Component, OnInit } from '@angular/core';
import { LaneService } from '@core/lane/lane.service';

enum POS {
  IN = 1, OUT, ALL
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    :host .lane-box {
      margin: 0 -24px;
    }
    :host .lane-box > * + * {
      margin-top: 16px;
    }
    :host .lane-box .search-box {
      display: flex;
      align-items: center;
      background: #fff;
      padding: 10px;
    }
    .search-box nz-select {
      flex: 1;
    }
  `]
})
export class DashboardComponent implements OnInit {
  pos: number = POS.ALL;
  lanes;
  selectLanes = [];
  constructor(
    private LaneSrv: LaneService
  ) { }

  ngOnInit() {
    this.LaneSrv.getLanes().subscribe((req: any[]) => {
      this.lanes = req;
    })
  }

  get viewLanes() {
    return this.selectLanes.filter(lane => lane.pos & this.pos);
  }
}
