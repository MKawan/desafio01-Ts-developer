import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

//New Account People
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'MKawan', 155486)
console.log(peopleAccount)
peopleAccount.deposit(500)

//DIO Account
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 155486)
companyAccount.deposit(2500)
console.log("Seu Saldo atual: R$ " + companyAccount.balance)
companyAccount.getLoan(25000)
console.log(companyAccount)
console.log("Seu Saldo atual: R$ " + companyAccount.balance)