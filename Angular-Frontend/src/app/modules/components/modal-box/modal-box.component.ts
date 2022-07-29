import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.css'],
})
export class ModalBoxComponent implements OnInit {
  @Input() modal_data :any = {};
  @Input() modal_style_class: string[] = [];
  @Input() modal_title: string = '';
  @Input() pdf_link: string = '';
  @Input() heading_name: any = {};
  @Output() close_modal: EventEmitter<any> = new EventEmitter();
  @Output() PDFDownload: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.modal_data);
  }
  getValue(item: any): any {
    if(this.modal_data[item.key]=="")
      return '--';
    else 
      return this.modal_data[item.key];
  }
  closeModalBtn(): void {
    this.close_modal.emit();
  }
  emitPDFEvent(): void {
    this.PDFDownload.emit();
  }
}
