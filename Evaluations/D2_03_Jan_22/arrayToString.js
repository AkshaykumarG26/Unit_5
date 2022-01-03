function arrayToString(n, arr){
    var res = ''
    for (var i = 0; i < n; i++){
        if (arr[i] < 0){
            res = res + 0
        }else{
            res = res + arr[i]
        }
    }

    console.log(res)
}

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    arrayToString(n, arr)
    
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`5
    2 -4 6 8 -9`);
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