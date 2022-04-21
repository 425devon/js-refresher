'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //   immidiately destructure object passed in.
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '00:00',
    address = 'default address',
  }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} for ${address}.
    recieved at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`making pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (main, ...otherIngredients) {
    console.log(main);
    console.log(otherIngredients);
  },
};

// restaurant.orderPizza('sauce', 'meat', 'cheese');
// let order = ['meat', 'cheese', 'sauce'];
// restaurant.orderPizza(...order);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '123 fake st',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// spread operator
// const arr = [4, 5, 6];
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'salad', 'calazone'];

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// // concat arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'devon';
// const letters = [...str];
// console.log(letters.length);

// const ingredients = [
//   prompt("let's make pasta! ingredient 1?"),
//   prompt('ingredient 2?'),
//   prompt('ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// spread object

// const newRestaraunt = { ...restaurant, founder: 'devon', location: 'seattle' };
// console.log(restaurant);
// console.log(newRestaraunt);
