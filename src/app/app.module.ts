import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { FriendComponent } from './components/friend/friend.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LineComponent } from './components/line/line.component';

const angularMaterialModules = [
  DragDropModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DialogComponent,
    FriendComponent,
    LineComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    angularMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, FriendComponent]
})
export class AppModule { }
