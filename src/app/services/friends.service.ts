import { Injectable } from '@angular/core';
import { Friend } from '../models/Friend.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  public initialState: Friend[] = [];
  public flattenedItems: Friend[] = [];
  public commissionRate: number = 0.2;

  constructor() { }

  init() {
    this.initialState = [
      {
        initialX: 250,
        initialY: 130,
        lineX: 250,
        lineY: 130,
        id: 1,
        name: "John",
        ticketsSold: 50,
        totalFromCommission: 1360,
        totalFromSales: 5000,
        totalFromSalesPlusComission: 6360,
        color: 'red',
        children: [
          {
            initialX: 600,
            initialY: 130,
            lineX: 600,
            lineY: 130,
            id: 2,
            fatherId: 1,
            name: "Alon",
            ticketsSold: 30,
            totalFromCommission: 0,
            totalFromSales: 3000,
            totalFromSalesPlusComission: 3000,
            color: 'purple',
            children: []
          },
          {
            initialX: 600,
            initialY: 300,
            lineX: 600,
            lineY: 300,
            id: 3,
            fatherId: 1,
            name: "Tal",
            ticketsSold: 20,
            totalFromCommission: 1800,
            totalFromSales: 2000,
            totalFromSalesPlusComission: 3800,
            color: 'blue',
            children: [
              {
                initialX: 900,
                initialY: 130,
                lineX: 900,
                lineY: 130,
                id: 4,
                fatherId: 3,
                name: "Shalom",
                ticketsSold: 40,
                totalFromCommission: 0,
                totalFromSales: 4000,
                totalFromSalesPlusComission: 4000,
                color: 'black',
                children: []
              },
              {
                initialX: 900,
                initialY: 300,
                lineX: 900,
                lineY: 300,
                id: 5,
                fatherId: 3,
                name: "Adi",
                ticketsSold: 50,
                totalFromCommission: 0,
                totalFromSales: 5000,
                totalFromSalesPlusComission: 5000,
                color: 'orange',
                children: []
              }
            ]
          }
        ]
      }
    ]
    this.flattenedItems = this.flattenArray(this.initialState);
  }

  add(data: Friend) {
    this.flattenedItems.push(data);
  }

  update(data: Friend, id: number) {
    const index = this.flattenedItems.findIndex(x => x.id === id);
    this.flattenedItems[index].children.push(data);
    this.flattenedItems.push(data);
    this.calculateCommission(data, index, data.totalFromSales);
  }

  calculateCommission(child: Friend, index: number, commission: number) {
    if (!child) return;
    const father = this.flattenedItems[index];
    const moneyFromChild = Math.floor((commission * this.commissionRate))
    father.totalFromCommission += moneyFromChild;
    father.totalFromSalesPlusComission = father.totalFromSales + father.totalFromCommission;
    this.flattenedItems[index] = father;
    if (father.fatherId) {
      const nextId = this.flattenedItems.findIndex(x => father.fatherId === x.id);
      return this.calculateCommission(father, nextId, moneyFromChild);
    } else return this.calculateCommission(null, null, null);
  }

  flattenArray(array: Friend[]) {
    let result = [];
    array.forEach((friend: Friend) => {
      result.push(friend);
      if (Array.isArray(friend.children)) {
        result = result.concat(this.flattenArray(friend.children));
      }
    });
    return result;
  }

  makeRandomColor() {
    let color = '';
    while (color.length < 6) {
      color += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    return '#' + color;
  }
}
