import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ImageService {
	private _url = 'https:\/\/www.reddit.com\/';

	//injecting a service in this way is eqivalent to:
	// private _http: HttpClient;
	// constructor(http: HttpClient) {
	// 	this._http = http;
	// }
	constructor(private _http: HttpClient) {

	}

	getImages() : Observable<any[]> {
		//console.log(this._http.get<any[]>(this._url));
		return this._http.get<any[]>(this._url)
			.do(data => console.log(JSON.stringify(data)))
			.catch(err => Observable.throw(err.message));
	}

	// if it is to return an observable (which http get returns), use subscribe
	// 		.subscribe(
	// 			products => "",
	// 			error => "");
	// }
}