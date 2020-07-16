import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Friend } from 'src/app/models/Friend.model';
import { FriendsService } from 'src/app/services/friends.service';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public items: Friend[] = [];
  public selectedId: number = null;
  public ticketPrice: number = 100;
  public showOverlay: boolean = false;

  constructor(
    private readonly dialog: MatDialog,
    private readonly friendsService: FriendsService,
    private readonly filesService: FilesService
  ) {

    this.friendsService.init();
    this.items = this.friendsService.flattenedItems;

  }

  ngOnInit() {
  }

  openDialog(e) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        initialX: e.offsetX,
        initialY: e.offsetY,
      }
    });

    dialogRef.afterClosed()
      .subscribe((data: Friend) => {
        if (data) {
          data.totalFromSales = data.ticketsSold * this.ticketPrice;
          if (this.selectedId) {
            data.fatherId = this.selectedId;
            data.color = this.friendsService.makeRandomColor();
            this.friendsService.update(data, this.selectedId);
          } else {
            data.color = this.friendsService.makeRandomColor();
            this.friendsService.add(data);
          }
        }
        this.closeOverlay();
      });
  }

  getSelectedId(data: any) {
    this.selectedId = data.id;
    this.showOverlay = data.showOverlay;
  }

  closeOverlay() {
    this.showOverlay = false;
    this.selectedId = null;
  }

  export() {
    this.filesService.exportToCSV(this.items);
  }

}