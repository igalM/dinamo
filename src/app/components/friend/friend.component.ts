import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from 'src/app/models/Friend.model';
import { CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent {
  @Input() friend: Friend = null;
  @Output() idEmitter = new EventEmitter<{ id: number, showOverlay: boolean }>();

  constructor() { }

  handleDrag(e: CdkDragMove) {
    const element = e.source.getRootElement();
    const newPos = element.getBoundingClientRect();
    this.friend.lineX = newPos.x;
    this.friend.lineY = newPos.y;
  }

  emitId() {
    this.idEmitter.emit({ id: this.friend.id, showOverlay: true });
  }

}
