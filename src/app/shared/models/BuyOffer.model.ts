export interface BuyOffer {
    id: number;
    amount: number;
    resourceId: number;
    price: number;
    date: Date;
    isValid: boolean;
    companyId:number;
}