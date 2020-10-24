
   module.exports = function check(str, bracketsConfig) {
  
     let bracketsConfigObj = new Map(bracketsConfig);

       let arr = [];

    for (let ind of str) {
      
        if ( ind ==  bracketsConfigObj.get(arr[arr.length - 1]) )
      
              arr.pop()

        else {arr.push(ind)}

      }

       return !arr.length
  }
