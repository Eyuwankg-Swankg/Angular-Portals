import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  @Input() portal_name = '';
  constructor() { }

  ngOnInit(): void {
  }

}
