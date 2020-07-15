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
      return {
        name: x.name,
        ticketsSold: x.ticketsSold,
        totalSales: x.totalFromSales,
        totalFromCommission: x.totalFromCommission,
        totalFromSalesPlusCommission: x.totalFromSalesPlusComission
      };
    })

    var options = {
      headers: ["Name", "Tickets Sold", "Total Sales", "Total Commission", "Total Sales + Commission"]
    };

    new AngularCsv(transformedData, 'Diagram', options);
  }
}
