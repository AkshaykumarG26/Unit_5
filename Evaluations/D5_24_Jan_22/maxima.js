function localMaxima(n, arr){
    if (n < 3) {
      console.log(-1);
    } else {
      var count = 0;
      for (var i = 1; i < n - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
          count++;
        }
      }
      console.log(count);
    }
}


function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var n = +input[line++]
    var arr = input[line++].trim().split(" ").map(Number)

    localMaxima(n, arr)
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`1
rbbyrrby rbb rbbybbryb`);
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
