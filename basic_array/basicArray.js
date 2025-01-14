// How would you find the largest number in an array?

const arr = [1, 5, 10, 15, 20];

const findLargestNumber = () => {
  let largeNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largeNum) {
      largeNum = arr[i];
    }
  }
  return largeNum;
};

const output = findLargestNumber();
console.log("output", output);

const findLargestNumberUsingReduce = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, arr[0]);

console.log("findLargestNumberUsingReduce", findLargestNumberUsingReduce);

// How would you find the sum of all numbers in an array?

const sumArr = () => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log("sumArr", sumArr());

// How do you remove the first item from an array?

const removeFirstElement = (arr) => {
  let arr1 = [];
  for (let i = 1; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  return arr1;
};

console.log("removeFirstElement", removeFirstElement(arr));

//  How do you add a new element to the end of an array?

// arr.push(99);

// console.log("newElementEnd", arr);

// How can you check if an element exists in an array?

const elementCheck = (arr, num) => {
  let bool = false;
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      bool = true;
    }
  }
  return bool;
};

console.log("elementCheck", elementCheck(arr, 99));
