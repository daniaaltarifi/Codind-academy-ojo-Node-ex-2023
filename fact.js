function factorialize(num) {
    if (num === 0  || num === 1) 
          return 1;
    
    else {
        return (num * factorialize(num - 1));
    }
  }
 
//   console.log(`The factorial of ${num} `);
  module.exports={factorialize}


 