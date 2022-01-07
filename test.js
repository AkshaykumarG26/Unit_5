function printNums(num){
    for (var i = 0; i < num; i++){
        // var ak = ""
        for (var j = 1; j <= num; j++){
            // ak = ak + j ;
            if (j > i){
                break
            }
            console.log(j)
        }
        // console.log(ak)
    }
}




function printNums2(num){
    for (var i = 0; i < num; i++){
        var ak = ""
        for (var j = 1; j <= num; j++){
            ak = ak + j + " ";
        }
        console.log(ak)
    }
}

/*
op
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
*/


function start(num){
    for (var i = 0; i < num; i++){
        var ak = "* "
        for (var j = 1; j <= num; j++){
            ak = ak + "* " ;
        }
        
        console.log(ak)
    }
}

/* 
op  
* * * *
* * * *
* * * *
* * * * 
*/