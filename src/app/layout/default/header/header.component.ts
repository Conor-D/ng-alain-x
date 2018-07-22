import { Component, ViewChild } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: [`
    :host .logo {
      height: 64px;
      display: flex;
      background: rgba(0, 33, 64, 1);
      align-items: center;
      justify-content: center;
    }
    :host .title {
      color: #fff;
    }
    :host .top-nav i.anticon {
      font-size: 18px;
      color: #fff;
      margin: 0 10px;
    }
  `]
})
export class HeaderComponent {
  searchToggleStatus: boolean;

  constructor(public settings: SettingsService) { }

  toggleCollapsedSideabar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
