/** @format */

import console = require('console');

export interface MockBarcode {
  id: string;
  shortName: string;
  longName: string;
  size: string;
  price: number;
  description: string;
}

let data: MockBarcode[] = [
  {
    id: '123456',
    shortName: 'shortNameExample',
    longName: 'longNameExample',
    size: 'sizeExample',
    price: 10.0,
    description: 'descriptionExample',
  },
  {
    id: '234289',
    shortName: 'Water',
    longName: 'Dasani Water Bottle',
    size: '16 oz',
    price: 2.0,
    description: 'Super clear water',
  },
  {
    id: '778653',
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
