export class Transaction {
    constructor(public transactionID : number, public userID : number, 
        public accountID : number, public transactionType : number, 
        public amount : number, public date : any) {
            this.transactionID = transactionID;
            this.userID = userID;
            this.accountID = accountID;
            this.transactionType = transactionType;
            this.amount = amount;
            this.date = date;
        }

    getTransactionID() {
        return this.transactionID;
    }
        
    getUserID(){
        return this.userID;
    }

    getAccountID() {
        return this.accountID;
    }

    getTransactionType(){
        return this.transactionType;
    }

    getAmount(){
        return this.amount;
    }

    getDate(){
        return this.date;
    }
}