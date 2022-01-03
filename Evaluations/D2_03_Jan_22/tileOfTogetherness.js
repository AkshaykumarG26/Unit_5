function tileOfTogetherness (n,m){
    var text = n.toString().split("").map(Number)
    var sum = 0;
    for (var i = 0; i < text.length; i++){
        sum = sum + text[i]
      for (var j = 0; j < text.length; j++){
        if (n+sum != m){
          sum = sum + text[j]
        }else{
          break
        }
      }
    }
    if (n+sum == m){
      console.log(m)
    }else{
      console.log(-1)
    }     
}

// tileOfTogetherness(32,47)

function runProgram(input) {
    input = input.trim().split(" ");
    var n = +input[0]
    var m = +input[1]
    // console.log(input)
    tileOfTogetherness(32,47)

    
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`32 47`);
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