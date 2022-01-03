function isIttriangle(a,b,c){
    

        if(c >= (a + b) || a >= (b + c) || b >= (a + c)){
            return "Yes"
        }else{
            return "No"
        }
}




function runProgram(input) {
    input = input.trim().split("\n");
    var testCases = +input[0]
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var [a,b,c] = input[line++].trim().split(" ").map(Number)
        console.log(isIttriangle(a,b,c))
        
        
        
    }
    
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
    `);
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

