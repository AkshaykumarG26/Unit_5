function seperationOfOddEven(N, arr, Q) {
  //write code here
    var even = []
    var odd = []

    for (var i = 0; i < N; i++){
        if (arr[i] % 2 == 0){
            even.push(arr[i])
        }else {
            odd.push(arr[i])
        }
    }

    if (Q === 1){
       console.log(even.concat(odd).join(' '))
    }else if(Q === 2){  
        console.log(odd.concat(even).join(' '))
    }
}


seperationOfOddEven(5,[1,2,3,4,5],1)


