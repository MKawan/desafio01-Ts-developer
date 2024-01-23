import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number
   balance: number = 0
  private bonus: number = 10
  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }
    //deposito
    deposit = (valor: number): void => {
      if(this.validateStatus()){
        this.balance = this.balance + valor + this.bonus
        console.log(`Você depositou R$ ${valor} e ganhou R$ 10 a mais de bonos total R$ ${valor + this.bonus}`)
        console.log(`Saldo Atual R$ ${this.balance}`)
      }
    }
  
}