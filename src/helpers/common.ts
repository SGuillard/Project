import { IsEqualArrayType } from '../types/types';

/**
 * Shallow compare two arrays
 * @param array1
 * @param array2
 */
export const isEqualArray: IsEqualArrayType = (array1: number[], array2: number[]) => array1.length === array2.length && array1.sort()
.every(function (value, index) {
  return value === array2.sort()[index]
});

/**
 * Remove the first element from an array
 * @param elements
 */
export const arrayWithoutFirstElement = (elements: any[]) => {
  return elements.filter(
    (element) => element !== elements[0])
}
