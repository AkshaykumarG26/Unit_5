function count (x,y){
    
    if (y != 1){
        if (x != 1){
            console.log("*")
            count(x/2, y)
            
        }else{
            y = y - 1;
            count(4,y)
        }
    }
}

count(4, 4)