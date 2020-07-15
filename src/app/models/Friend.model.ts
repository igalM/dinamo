export class Friend {
    id: number;
    fatherId?: number;
    initialX: number;
    initialY: number;
    lineX: number;
    lineY: number;
    totalFromSales: number;
    totalFromCommission: number;
    totalFromSalesPlusComission: number;
    name: string;
    ticketsSold: number;
    children: Friend[];
    color: string;
}
