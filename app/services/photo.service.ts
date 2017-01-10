import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Photo } from '../classes/photo';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhotoService {
    constructor(private http: Http) { }

    getPhotoList(): Promise<Photo[]> {
        let url = 'http://jsonplaceholder.typicode.com/photos';
        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Photo[])
            .catch(err => {
                alert(err);
                return [];
            });
    }

    getAlbum(albumId: number): Promise<Photo[]> {
        let url = 'http://jsonplaceholder.typicode.com/albums/:album_id/photos'
            .replace(/:album_id/, `${albumId}`);
        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Photo[])
            .catch(err => {
                alert(err);
                return [];
            });
    }

    getImage(imageId: number) {
        let url = 'http://jsonplaceholder.typicode.com/photos/:photo_id'
            .replace(/:photo_id/, `${imageId}`);
        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Photo)
            .catch(err => {
                alert(err);
                return null;
            });
    }
}