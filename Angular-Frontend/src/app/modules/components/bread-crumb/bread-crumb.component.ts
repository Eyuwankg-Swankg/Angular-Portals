import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css'],
})
export class BreadCrumbComponent implements OnInit {
  @Input() style_class: string[] = [];
  @Input() breadcrumb_text: string[] = [];

  @Output() onToDashboard: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onPressHome(): void {
    this.onToDashboard.emit();
  }
}
