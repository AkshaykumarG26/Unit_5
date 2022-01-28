function pashaAndShasha(word1, word2) {
   var len1 = word1.length;
   var len2 = word2.length;
   if(len1 !== len2){
      console.log("False");
      return
   }
   var str1 = word1.split('').sort().join('');
   var str2 = word2.split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } else { 
      console.log("False");
   }
}


function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0]
  var line = 1
  for (var i = 0; i < testCases; i++){
    var word1 = input[line++]
    var word2 = input[line++]
    // console.log(word1, word2)

    pashaAndShasha(word1, word2);
  }
}

if (process.env.USERNAME === "akshra") {
  runProgram(`2
abcd
dcab
aa
aaa`);
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
