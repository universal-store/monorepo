/** @format */

// import console = require('console');

export interface MockBarcode {
  id: string;
  shortName: string;
  longName: string;
  size: string;
  price: number;
  description: string;
  scanned: boolean;
}

let data: MockBarcode[] = [
  {
    id: '123456',
    shortName: 'shortNameExample',
    longName: 'longNameExample',
    size: 'sizeExample',
    price: 10.0,
    description: 'descriptionExample',
    scanned: false,
  },
  {
    id: '234289',
    shortName: 'Water',
    longName: 'Dasani Water Bottle',
    size: '16 oz',
    price: 2.0,
    description: 'Super clear water',
    scanned: false,
  },
  {
    id: '778653',
    shortName: 'Bread',
    longName: 'Nature Valley Honey Whole Wheat Bread',
    size: '12 Slices',
    price: 2.0,
    description: 'Yummy bread',
    scanned: false,
  },
];

//if barcode scan is successful output to console. data.scanned all set to false
// const randomData = data[Math.floor(Math.random() * data.length)];
// if (randomData.scanned) {
//   console.log(randomData);
// } else {
//   console.log('scanned: false -- barcode scan not successful');
// }
