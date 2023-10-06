function bubbleSort(arr) {
  const n = arr.length;
  console.log(n);
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
}

const arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log("Mảng đã sắp xếp:", arr);