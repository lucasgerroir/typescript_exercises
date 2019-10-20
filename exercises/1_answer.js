type BankAccount = {money: number, deposit: (v: number) => void };
 let bankAccountA: BankAccount = {
	 money: 2000,
	 deposit(value: number):  void {
		 this.money += value;
	 }
 }
 let myselfA: {name: string, bankAccount: BankAccount, hobbies: string[] } = {
	 name: "Lucas",
	 bankAccount: bankAccount,
	 hobbies: ["Sports", "Cooking"]
 };
 myselfA.bankAccount.deposit(3000);
 console.log(myselfA);
