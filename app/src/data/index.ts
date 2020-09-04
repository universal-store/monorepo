/** @format */

import { StoreItem } from '&graphql';

export const nullItem: StoreItem = {
  id: 'err',
  price: 0.0,
  purchased: false,
  barcodeId: '123456',
  quantity: 'err',
  longName: 'err',
  shortName: 'err',
  description: 'err',
};

export const mockBarcodeData: StoreItem[] = [
  {
    id: '654789',
    price: 10.0,
    purchased: false,
    barcodeId: '123456',
    quantity: 'sizeExample',
    longName: 'longNameExample',
    shortName: 'shortNameExample',
    description: 'descriptionExample',
  },
  {
    id: '234289',
    price: 2.0,
    purchased: false,
    barcodeId: '456789',
    quantity: '16 oz',
    longName: 'Dasani Water Bottle',
    shortName: 'Water',
    description: 'Super clear water',
  },
  {
    id: '778653',
    price: 2.0,
    purchased: false,
    barcodeId: '698745',
    quantity: '12 Slices',
    longName: 'Nature Valley Honey Whole Wheat Bread',
    shortName: 'Bread',
    description: 'Yummy bread',
  },
];
