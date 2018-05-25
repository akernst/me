// Imports
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Declarations
import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { ImageGridTableComponent } from './image-grid-table/image-grid-table.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { ImagePanelComponent } from './image-panel/image-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ImageService } from './ImageService/image.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'art', component: ArtComponent},
      {path: 'music', component: PageNotFoundComponent},
    	{path: '', redirectTo: '/', pathMatch: 'full'},
    	{path: '**', component: PageNotFoundComponent }
    ])
  ],
  declarations: [
    AppComponent,
    ArtComponent,
    ImageGridTableComponent,
    ImageModalComponent,
    ImagePanelComponent,
    PageNotFoundComponent
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
