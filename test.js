function reverseWords(s)
{
    // code here
    var out = ''
    var str = s.split(".")
    for (var i = str.length-1; i >= 0; i--){
        if (i === 0){
            out = out + str[i]
        }else{
            out = out + str[i] + '.'
        }
    }
    
    console.log(out)

    
    
}

reverseWords("i.like.this.program.very.much")