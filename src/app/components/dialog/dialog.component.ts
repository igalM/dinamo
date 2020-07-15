import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      initialX: data.initialX,
      initialY: data.initialY,
      lineX: data.initialX,
      lineY: data.initialY,
      totalFromSales: 0,
      totalFromCommission: 0,
      totalFromSalesPlusComission: 0,
      name: ['', Validators.required],
      ticketsSold: ['', Validators.required],
      children: [[]]
    });
  }

  ngOnInit(): void {
  }

  continue() {
    this.dialogRef.close(this.form.value);
  }

}
