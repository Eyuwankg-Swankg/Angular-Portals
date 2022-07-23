import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.css'],
})
export class ModalBoxComponent implements OnInit {
  @Input() modal_data = {};
  @Input() modal_style_class: string[] = [];
  @Input() modal_title: string = '';
  @Output() close_modal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.modal_data);
  }
  closeModalBtn(): void {
    this.close_modal.emit();
  }
}
