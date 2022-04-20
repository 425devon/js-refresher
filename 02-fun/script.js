'use strict';

/*
const bills = [125, 555, 44]

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}

const calcTotal = (bills) => {
    let tips = new Array;
    let totals = new Array;
    let total = 0;

    bills.forEach(bill => {
        let tip = calcTip(bill);
        tips.push(tip);
        totals.push(bill + tip);
        total += (bill + tip);
    });
    console.log(`tips: ${tips}`);
    console.log(`totals: ${totals}`);
    console.log(`your total is: ${total}`);
    return;
}

calcTotal(bills);
*/

/*
const devon = {
    firstName: 'devon',
    lastName: 'langendoerfer',
    birthYear: '1988',
    job: 'engineer',
    friends: ['bill', 'ted'],
    calcAge: function () {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age
    }
};

console.log(devon.calcAge())
console.log(devon.age)
*/

const mark = {
    firstName: 'mark',
    lastName: 'miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    firstName: 'john',
    lastName: 'smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};

let bigger;
let smaller;

if (mark.calcBMI() > john.calcBMI()) {
    bigger = mark;
    smaller = john;
} else {
    bigger = john;
    smaller = mark;
}

console.log(`${bigger.firstName + ' ' + bigger.lastName}'s
BMI (${bigger.bmi}) is higher than ${smaller.firstName + ' ' + smaller.lastName}'s
(${smaller.bmi})!`);