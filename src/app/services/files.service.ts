import { Injectable } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { Friend } from '../models/Friend.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  exportToCSV(data: Friend[]) {

    const transformedData = data.map((friend: Friend) => {
      const children = [];
      if (friend.children.length > 0) {
        for (let i = 0; i < friend.children.length; i++) {
          children.push(friend.children[i].name);
        }
      } else {
        children.push('None');
      }
      return {
        name: friend.name,
        ticketsSold: friend.ticketsSold,
        totalSales: friend.totalFromSales,
        totalFromCommission: friend.totalFromCommission,
        totalFromSalesPlusCommission: friend.totalFromSalesPlusComission,
        children: children.join(', ')
      };
    });

    var options = {
      headers: ["Name", "Tickets Sold", "Total Sales", "Total Commission", "Total Sales + Commission", "Friends Brought"]
    };

    new AngularCsv(transformedData, 'Diagram', options);
  }
}
