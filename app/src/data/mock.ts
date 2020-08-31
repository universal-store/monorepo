/** @format */

import console = require('console');

export interface MockBarcode {
  shortName: String;
  longName: String;
  size: String;
  price: number;
  description: String;
}

let data: MockBarcode[] = [
  {
    shortName: 'shortNameExample',
    longName: 'longNameExample',
    size: 'sizeExample',
    price: 10.0,
    description: 'descriptionExample',
  },
  { shortName: 'Water', longName: 'Dasani Water Bottle', size: '16 oz', price: 2.0, description: 'Super clear water' },
  {
    shortName: 'Bread',
    longName: 'Nature Valley Honey Whole Wheat Bread',
    size: '12 Slices',
    price: 2.0,
    description: 'Yummy bread',
  },
];

//if barcode scan is successful
const randomData = data[Math.floor(Math.random() * data.length)];
console.log(randomData);
