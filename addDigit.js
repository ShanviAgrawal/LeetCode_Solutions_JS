var addDigits = function(num) {
    if (num === 0) {return num};
      
      let sum = 0;
      while(num!=0){
        sum= sum + num % 10;
        num = Math.floor(num / 10);
      }
     
  
      if (sum >9){
        return(addDigits(sum));
      } else{
        return sum;
      }   
  
       
  };

  