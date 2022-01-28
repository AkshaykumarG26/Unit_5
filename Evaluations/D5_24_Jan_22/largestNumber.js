

/*
function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
  var max = 0;
  for (var i = 0; i < n; i++){
    if (max < arr[i]){
      max = arr[i]
    }
  }
  console.log(max)
}

if (process.env.USERNAME === "akshra") {
  runProgram(`5
6 7 8 1 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

*/


// function findLargest(n, arr, low, high){
//   if (high == low){
//     return arr[low]
//   }

//   var mid = low + ((high - low) / 2)

//   if (mid == 0 && arr[mid] > arr[mid+1]){
//     return arr[mid]
//   }

//   if (mid < high && arr[mid + 1] < arr[mid] && mid>0 && arr[mid]>arr[mid-1]){
//     return arr[mid]
//   }

//   if (arr[low] > arr[mid]) {
//     return findLargest(arr, low, mid - 1);
//   } else {
//     return findLargest(arr, mid + 1, high);
//   }
// }

// console.log(findLargest(5,[6,7,8,1,4], 0, 4))

function findLargest(arr, low, high) {
  if (high == low) return arr[low];
  var mid = low + (high - low) / 2;

  if (mid == 0 && arr[mid] > arr[mid + 1]) {
    return arr[mid];
  }

  if (
    mid < high &&
    arr[mid + 1] < arr[mid] &&
    mid > 0 &&
    arr[mid] > arr[mid - 1]
  ) {
    return arr[mid];
  }

  if (arr[low] > arr[mid]) {
    return findLargest(arr, low, mid - 1);
  } else {
    return findLargest(arr, mid + 1, high);
  }
}



function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
  console.log(findLargest(5, [6, 7, 8, 1, 4], 0, 4));
}

if (process.env.USERNAME === "akshra") {
  runProgram(`5
6 7 8 1 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
