function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var evenSum = 0;
    var oddSum = 0;
    for (var i = 0; i < n; i++){
        if (arr[i] % 2 == 0){
            evenSum += arr[i]
        }else{
            oddSum += arr[i]
        }
    }

    if (oddSum > evenSum){
        console.log("Odd")
    }else{
        console.log("Even")
    }

    
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`4
    1 2 3 4`);
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