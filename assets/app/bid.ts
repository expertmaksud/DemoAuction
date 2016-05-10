export /**
 * Bid
 */
    class Bid {
    constructor(
        public Id: string,
        public Amount: number ,
        public DealId: number,
        public CompanyName: string,
        public Country: string ,
        public AuctionId: string,
        public IsAdded: boolean      
    ) { }
}