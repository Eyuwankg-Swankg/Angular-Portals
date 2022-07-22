import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portal-card',
  templateUrl: './portal-card.component.html',
  styleUrls: ['./portal-card.component.css']
})
export class PortalCardComponent implements OnInit {

  @Input() portal_name='';
  @Input() overlay_color='';
  @Input() image_path='';

  constructor() { }

  ngOnInit(): void {
  }

}
