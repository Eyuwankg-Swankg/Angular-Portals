import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.css']
})
export class ModalBoxComponent implements OnInit {
  @Input() modal_data={};
  constructor() { }

  ngOnInit(): void {
    console.log(this.modal_data);
  }

}
