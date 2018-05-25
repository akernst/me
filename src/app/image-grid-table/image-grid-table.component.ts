import { Component, Input, OnInit } from '@angular/core';

// import { ImagePanelComponent } from './image-panel/image-panel.component';

@Component({
	selector: 'image-grid-table',
	templateUrl: './image-grid-table.component.html',
	styleUrls: ['./image-grid-table.component.css']
})
export class ImageGridTableComponent implements OnInit {
	@Input() imagesObject: any[];
	images : any[];
	ngOnInit() {
		this.images = this.imagesObject;
	}
}