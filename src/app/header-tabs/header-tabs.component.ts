import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.css']
})
export class HeaderTabsComponent implements OnInit {
  @Input() isSmsTabActive: boolean;
  @Output() onClickSmsIcon = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSmsIconClicked(): void {
    this.onClickSmsIcon.emit();
  }
}
