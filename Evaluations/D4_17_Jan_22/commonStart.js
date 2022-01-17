function commonStart(ballsArr){

    var out = []
    for (var i = 0; i < ballsArr.length; i++){
        for (var j = 0; j < ballsArr[i].length; j++) {
            if (ballsArr[i] === ballsArr[j]){
                out.push(ballsArr[i]);
                // out = out + ballsaArr[j]
            }
        }
    }
    return out[1]
}

// console.log(commonStart(["rbbyrrby", "rbb", "rbbybbryb"]));


function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0]
  var line = 1
  for (var i = 0; i < testCases; i++){
      var ballsArr = input[line++].trim().split(" ")
      
      console.log(commonStart[ballsArr])
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
