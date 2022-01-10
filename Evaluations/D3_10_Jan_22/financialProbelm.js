function financialProbelm (n, arr){
    var count = [];
    for (var i = 0; i < n; i++){
        if (arr[i] < arr[i+1]){
            
        }
    }
}



function runProgram(input) {
    input = input.trim().split("\n");
    var testCases = +input[0]
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var [n] = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        
    }

    
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`1
    6
    100 60 70 65 80 85`);
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
      process.exit(0) ;
    });
  }