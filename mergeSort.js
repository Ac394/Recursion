const mergeSort = (array) => {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  let merge = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merge.push(left[i]);
      i++;
    } else {
      merge.push(right[j]);
      j++;
    }
  }
  for (; i < left.length; i++) {
    merge.push(left[i]);
  }
  for (; j < right.length; j++) {
    merge.push(right[j]);
  }
  return merge;
};
