/** @format */

export interface MockItem {
  id: string;
  size: string;
  price: number;
  scanned: boolean;
  longName: string;
  shortName: string;
  description: string;
}

export const mockBarcodeData: MockItem[] = [
  {
    id: '123456',
    price: 10.0,
    scanned: false,
    size: 'sizeExample',
    longName: 'longNameExample',
    shortName: 'shortNameExample',
    description: 'descriptionExample',
  },
  {
    id: '234289',
    price: 2.0,
    size: '16 oz',
    scanned: false,
    shortName: 'Water',
    longName: 'Dasani Water Bottle',
    description: 'Super clear water',
  },
  {
    id: '778653',
    price: 2.0,
    scanned: false,
    size: '12 Slices',
    shortName: 'Bread',
    description: 'Yummy bread',
    longName: 'Nature Valley Honey Whole Wheat Bread',
  },
];

//if barcode scan is successful output to console. data.scanned all set to false
// const randomData = data[Math.floor(Math.random() * data.length)];
