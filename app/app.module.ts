import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { PhotoListComponent } from './components/photoList.component';
import { AlbumComponent } from './components/album.component';
import { ImageComponent } from './components/image.component';

import { PhotoService } from './services/photo.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PhotoListComponent,
    AlbumComponent,
    ImageComponent
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
