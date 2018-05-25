import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector: 'image-modal',
	templateUrl: './image-modal.component.html',
	styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {
	@Input() src: string;
	url: string;
	@Output() notify: EventEmitter<string> = new EventEmitter<string>();
	ngOnInit() {
    	this.url = this.src;
    }

    closeModal() {
    	this.notify.emit('close');
    }
}