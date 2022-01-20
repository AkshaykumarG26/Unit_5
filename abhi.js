function stringValue(S){
    var small = "abcdefghijklmnopqrstuvwxyz";
    var sum = 0;
    for (var i = 1; i <= S.length; i++){
        console.log(S[i])
        for (var j = 1; j <= small.length; j++){
            // console.log(small[j])
            if (S[i] == small[j]){
                sum = sum + i;
                // console.log(i)
            }
        }
    }
    console.log(sum)
}

stringValue('abaaaaab')