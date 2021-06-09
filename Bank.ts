class Bank{
    bankname:string;
    bankid:number;
    accountnumber:number;
    constructor(name:string,id:number,accnumber:number)
    {
        this.bankname=name;
        this.bankid=id;
        this.accountnumber=accnumber;
    }
    getSavingDeposit()
    {
        return `bank name is:${this.bankname} with id:${this.bankid} and account number is${this.accountnumber} gets 5% intrest per year`
    }
    getRecurringDeposit()
    {
        return `bank name is:${this.bankname} with id:${this.bankid} and account number is${this.accountnumber} gets 7% intrest per year`
    }

getFixedDeposit()
{
    return `bank name is:${this.bankname} with id:${this.bankid} and account number is${this.accountnumber} gets 10% intrest per year`
}
}
let bank1=new Bank('bank of baroda',121,121452)
let bank2=new Bank('state bank india',454,4721452)
let bank3=new Bank('canara bank',371,9821452)
console.log(bank1. getSavingDeposit())
console.log(bank2.getRecurringDeposit())
console.log(bank1.getFixedDeposit ())
console.log(bank1.bankname,bank1.bankid,bank1.accountnumber)
console.log(bank2.bankname,bank2.bankid,bank2.accountnumber)

console.log(bank3.bankname,bank3.bankid,bank3.accountnumber)



