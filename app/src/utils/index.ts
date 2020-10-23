/** @format */

import { useEffect, useState } from 'react';

export * from './formValidationUtils';

export const toCamelCase = (str: string): string => {
  const lowerStr = str.toLowerCase();
  return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
};

export const renderName = (firstName: string, lastName?: string): string => {
  let fullName = firstName;
  if (lastName) fullName += ' ' + lastName;
  return fullName;
};

// Code From https://usehooks.com/useDebounce/
export const useDebounce = (value: string, delay: number): string => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
};
