/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.69;

const markBmi = calculateBmi(markWeight, markHeight);
const johnBmi = calculateBmi(johnWeight, johnHeight);

const markHigherBmi = markBmi > johnBmi;

if (markHigherBmi) {
    console.log(`Marks BMI is ${markBmi}, Johns BMI is ${johnBmi}
marks bmi is higher = ${markHigherBmi}`)
} else {
    console.log(`Marks BMI is ${markBmi}, Johns BMI is ${johnBmi}
marks bmi is higher = ${markHigherBmi}`)
}


function calculateBmi(weight, height) {
    return (weight / (height ** 2));
}
*/

/*
let dolphinsAvg = getavg([988, 91, 99]);
let koalasAvg = getavg([888, 91, 110]);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("dolphins win 🏆")
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("koalas win 🏆")
} else if (dolphinsAvg === koalasAvg || dolphinsAvg < 100 && koalasAvg < 100) {
    console.log("draw")
}


function getavg(nums) {
    return nums.reduce((a, b) => a + b, 0)
}
*/

let bill = 1000
let tip = bill >= 50 && bill <= 300 ? (bill * .15) : (bill * .2)

console.log(`The bill was: ${bill} The Tip was: ${tip}
The total is: ${bill + tip}`)
