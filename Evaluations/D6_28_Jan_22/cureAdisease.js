function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  var vaccine = input[1].trim().split(" ").map(Number);
  var medichlorians = input[2].trim().split(" ").map(Number);
  var max = 0
  for (var i = 0; i < medichlorians.length; i++){
    if (max < medichlorians[i]){
        max = medichlorians[i]
    }
  }
//   console.log(max)
var flag = false
  for (var i = 0; i < testCases; i++) {
    if (vaccine[i] > max) {
        flag = true
    } else {
      flag = false
    }
  }

  if(flag){
      console.log("Yes")
  }else{
      console.log("No")
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`5
123 146 454 542 456
100 328 248 689 200`);
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
