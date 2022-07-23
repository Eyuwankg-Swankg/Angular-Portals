import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css'],
})
export class LoadingScreenComponent implements OnInit {
  @Input() loading_class:string = '';
  constructor() {}

  ngOnInit(): void {}
}
