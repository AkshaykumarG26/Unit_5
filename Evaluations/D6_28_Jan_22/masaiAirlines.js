function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  var checkIn = input[1].trim().split(" ").map(Number)
  var handBag = input[2].trim().split(' ').map(Number)
  for (var i = 0; i < testCases; i++){
        if (checkIn[i] <= 15 && handBag[i] <= 7) {
          console.log("Boarding");
        } else {
          console.log("Stop");
        }
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`4
12 14 15 6
8 5 7 4`);
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
