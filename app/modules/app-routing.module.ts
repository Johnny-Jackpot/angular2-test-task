import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from '../components/photoList.component';
import { AlbumComponent } from '../components/album.component';
import { ImageComponent } from '../components/image.component';

const routes: Routes = [
    { path: '', component: PhotoListComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: 'image/:id', component: ImageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
