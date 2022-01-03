function tileOfTogetherness (n,m){
    var text = n.toString().split("").map(Number)
    var sum = 0;
    // console.log(text)
    for (var i = 0; i < text.length; i++){
      for (var j = 0; j < text.length; j++){
        sum = sum + text[j]
        // return n
      }
    }
    console.log(n + sum)


    

    
    // if (n == m){
    //   console.log(m)
    // }else{
    //   console.log(-1)
    // }
    
    // return (n = n + sum)
}

tileOfTogetherness(32,47)

function runProgram(input) {
    input = input.trim().split(" ");
    // console.log(input)
    
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