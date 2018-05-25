import { Component } from '@angular/core';

import { IMAGES } from '../../assets/images';

@Component({
	selector: 'art',
	templateUrl: './art.component.html',
	styleUrls: ['./art.component.css']
})
export class ArtComponent {
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