import { Component, Input, OnInit } from '@angular/core';

// import {ImageModalComponent} from './image-modal/image-modal.component';

@Component({
	selector: 'image-panel',
	templateUrl: './image-panel.component.html',
	styleUrls: ['./image-panel.component.css']
})
export class ImagePanelComponent implements OnInit {
	@Input() imageJSON: any;
	url: string;
	title: string = "";
	showModal: boolean = false;
	constructor() {
		//fires every time the constructor is called.
        console.log('myCustomComponent');
    }

    ngOnInit() {
    	this.url = this.imageJSON.source;
    	if (this.imageJSON.title) {
    		this.title = this.imageJSON.title;
    	}
    }

    launchModal() {
    	this.showModal = !this.showModal;
    }

    toggleModal(message : string) {
    	this.showModal = !this.showModal;
    }
}