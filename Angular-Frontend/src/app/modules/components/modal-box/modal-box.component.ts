import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.css'],
})
export class ModalBoxComponent implements OnInit {
  @Input() modal_data: any = {};
  @Input() modal_style_class: string[] = [];
  @Input() modal_title: string = '';
  @Input() pdf_link: string = '';
  @Input() heading_name: any = {};
  @Output() close_modal: EventEmitter<any> = new EventEmitter();
  @Output() PDFDownload: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.heading_name = Object.entries(this.heading_name);
    this.heading_name.sort((a: string[], b: string[]) => (a[1] > b[1] ? 1 : 0));
  }
  getValue(item: string): string {
    return this.modal_data[item];
  }
  closeModalBtn(): void {
    this.close_modal.emit();
  }
  emitPDFEvent(): void {
    this.PDFDownload.emit();
  }
}
