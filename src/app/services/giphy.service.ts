import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GiphyService {
    results: string[];

    constructor(private http: HttpClient) {}

    search (term: string) {

        return this.http.get('https://api.giphy.com/v1/gifs/search?' + 
			'api_key=aCYi4fYZmpyFTsHQ9V5VU1TLnI8TSbO1=' + term +
                        '&limit=1&offset=0&rating=G&lang=en').toPromise().then(response => response);
    }
}
