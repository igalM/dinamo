import { Injectable } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { Friend } from '../models/Friend.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  exportToCSV(data: Friend[]) {

    const transformedData = data.map(x => {
      const children = [];
      if (x.children.length > 0) {
        for (let i = 0; i < x.children.length; i++) {
          children.push(x.children[i].name);
        }
      } else {
        children.push('None');
      }
      return {
        name: x.name,
        ticketsSold: x.ticketsSold,
        totalSales: x.totalFromSales,
        totalFromCommission: x.totalFromCommission,
        totalFromSalesPlusCommission: x.totalFromSalesPlusComission,
        children: children.join(', ')
      };
    });

    var options = {
      headers: ["Name", "Tickets Sold", "Total Sales", "Total Commission", "Total Sales + Commission", "Friends Brought"]
    };

    new AngularCsv(transformedData, 'Diagram', options);
  }
}
