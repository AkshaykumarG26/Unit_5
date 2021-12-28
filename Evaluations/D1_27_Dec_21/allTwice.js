function exceptOne(arr){
    var out = {}
    for (var i = 0; i < arr.length; i++){
        if (out[arr[i]] === undefined){
            out[arr[i]] = 1
        }else{
            out[arr[i]]++;
        }
    }

    for (var k in out){
        if (out[k] == 1){
            console.log(k)
        }
    }
}

// exceptOne(1,2,1,3,4,4,5,2,3)














function runProgram(input) {
    input = input.trim().split("\n");
    var testCases = +input[0]
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        exceptOne(arr)
    }
    
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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

