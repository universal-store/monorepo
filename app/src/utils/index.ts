/** @format */

export * from './formValidationUtils';

export const toCamelCase = (str: string) => {
  const lowerStr = str.toLowerCase();
  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
};

export const renderName = (firstName: string, lastName?: string) => {
  let fullName = firstName;
  if (lastName) fullName += ' ' + lastName;
  return fullName;
};
