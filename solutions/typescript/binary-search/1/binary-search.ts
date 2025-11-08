export function find(haystack: unknown, needle: unknown): number | never {

  if (!Array.isArray(haystack)) {
    throw new Error('find: haystack must be an array');
  }
  if (typeof needle !== 'number') {
    throw new Error('find: needle must be a number');
  }

  const arr = haystack as unknown[];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      throw new Error(`find: haystack element at index ${i} is not a number`);
    }
  }

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const mid_Val = arr[mid] as number;
    if (mid_Val === needle) {
      return mid;
    } else if (mid_Val < needle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  throw new Error('Value not in array');
}
