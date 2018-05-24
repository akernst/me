import { Component } from '@angular/core';

import { ImageGridTableComponent } from './image-grid-table/image-grid-table.component';
import { ImagePanelComponent } from './image-panel/image-panel.component';
import {ImageModalComponent} from './image-modal/image-modal.component';

import { IMAGES } from '../assets/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Old Town';
  images : any[] = this.getImageBlocks();
  getImageBlocks() : any {
  	let i = IMAGES;
  	let final = [];
  	let interim = [];
  	console.log(i.length);
  	for (let v = 1; v <= i.length; v++) {
  		console.log(i[v-1]);
  		interim.push(i[v-1]);
  		if (v % 3 === 0) {
  			final.push(interim);
  			interim = [];
  		}
  	}
  	if (interim !== []) {
  		final.push(interim);
  	}
  	return final;
  }
}
