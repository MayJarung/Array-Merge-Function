export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const reversedCollection2 = reverseArray(collection_2);

  return mergeThreeArrays(collection_1, reversedCollection2, collection_3);
}

function reverseArray(arr: number[]): number[] {
  const reversed: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function mergeThreeArrays(arr1: number[], arr2: number[], arr3: number[]): number[] {
  const merged12 = mergeTwoArrays(arr1, arr2);

  return mergeTwoArrays(merged12, arr3);
}

function mergeTwoArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
