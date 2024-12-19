function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        console.log(`Swapped ${arr[i]} and ${arr[i+1]}. Array: ${arr}`);
      }
    }
  } while (swapped);
  return arr;
}

function sortingAlgoBubble() {
  let numbersStr = prompt("Enter numbers separated by commas:");
  let numbers = numbersStr.split(",").map(Number);
  let sortedNumbers = bubbleSort(numbers);
  console.log("Sorted array:", sortedNumbers);
}

sortingAlgoBubble();
