var lastStoneWeight = function(stones) {
    
    
    var i = 1;
    while (stones.length > 1){
        stones.sort(function(a, b){return b - a});
        if( stones[i-1] == stones[i]){
            stones.splice(i-1, i+1);
        } else{
           
            stones[i] = stones[i-1] - stones[i];
             stones.shift();
        }
    }
    return stones;
    
};