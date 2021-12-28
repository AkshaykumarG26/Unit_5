function missingLetters(arr){
    var out = ""

    if (arr[0] != 0){
        console.log(0)
    }else{
        for (var i = 0; i < arr.length; i++){
            if (arr[i+1] - arr[i] != 1){
                out = out + arr[i]
            }
        }
        console.log(Number(out[0])+1)
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var testCases = +input[0]
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var arr = input[line++].trim().split(" ").map(Number)
        missingLetters(arr)
    }
    
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12`);
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