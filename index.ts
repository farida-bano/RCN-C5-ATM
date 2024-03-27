#! /usr/bin/env node

class ATM {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    checkBalance(): number {
        return this.balance;
    }

    withdraw(amount: number): string {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `You have withdrawn ${amount}. Remaining balance: ${this.balance}`;
        } else {
            return 'Invalid amount or insufficient balance.';
        }
    }

    deposit(amount: number): string {
        if (amount > 0) {
            this.balance += amount;
            return `You have deposited ${amount}. New balance: ${this.balance}`;
        } else {
            return 'Invalid amount.';
        }
    }
}

// Example usage:
const chaseATM = new ATM(1000); // Starting balance 1000

console.log(chaseATM.checkBalance()); // Output: 1000

console.log(chaseATM.withdraw(200)); // Output: You have withdrawn 200. Remaining balance: $800

console.log(chaseATM.deposit(500)); // Output: You have deposited 500. New balance: $1300

console.log(chaseATM.withdraw(1500)); // Output: Invalid amount or insufficient balance.
