import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { PhotoService } from '../services/photo.service';

import { Photo } from '../classes/photo';

import 'rxjs/add/operator/switchMap';

@Component({
    template: `
    <div *ngIf="photo" class="gallery">
        <figure class="image-view">
            <img src="{{ photo.url }}" alt="{{ photo.title }}" />
            <figcaption>{{ photo.title }}</figcaption>
        </figure>
    </div>`
})
export class ImageComponent implements OnInit {
    photo: Photo;

    constructor(
        private photoService: PhotoService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.photoService.getImage(params['id']))
            .subscribe((data: Photo) => this.photo = data);
    }
}