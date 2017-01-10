import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { PhotoService } from '../services/photo.service';

import { Photo } from '../classes/photo';

import 'rxjs/add/operator/switchMap';

@Component({
    template: `
    <div *ngIf="photos" class="gallery">
        <figure *ngFor="let photo of photos">
            <img src="{{ photo.url }}" alt="{{ photo.title }}"
            (click)="goToImage(photo)"/>
            <figcaption>{{ photo.title }}</figcaption>
        </figure>
    </div>`
})
export class AlbumComponent implements OnInit, OnDestroy {
    photos: Photo[] = [];
    data: Photo[] = [];
    private elems: number = 10;
    
    constructor(
        private photoService: PhotoService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.photoService.getAlbum(params['id']))
            .subscribe((data: Photo[]) => {
                this.data = data;
                this.photos = this.photos.concat(this.data.slice(0, 20));
            });
        window.addEventListener("scroll", this.onScroll.bind(this, this.elems));
    }

    ngOnDestroy(): void { window.removeEventListener("scroll"); }

    onScroll(elems: number): void {
        let scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
        let height = document.documentElement.clientHeight;
        let scrollTop = window.pageYOffset;
        let diff = scrollHeight - (height + scrollTop);

        if (diff > 10) return;

        let start = this.photos.length;
        let finish = start + elems;

        if (start > this.data.length) return;

        let add: Photo[];
        if (finish + 1 > this.data.length) {
            add = this.data.slice(start);
        } else {
            add = this.data.slice(start, finish);
        }
        this.photos = this.photos.concat(add);
    }

    goToImage(photo: Photo): void{
        this.router.navigate(['/image', photo.id]);
    }
}