var twoSum = function(nums, target) {
    var comp = new Map();
    for (var i=0; i< nums.length; i++){
        if (comp.has(target - nums[i])){
            var ind = comp.get(target-nums[i]);
            return [i, ind];
        }
        else{
            comp.set(nums[i],i);
        }
    }      
};