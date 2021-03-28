const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error;
}

  let arr1 = [];
  for(let i = 0; i < arr.length; i++){

  if(arr[i] == `--discard-next` && i != arr.length - 1){
    i = i + 2;
  } else 
    if(arr[i] == `--discard-prev` && arr[i - 1] !== undefined && i !== 0){
        arr1.pop();
      }
   else 
    if(arr[i] == `--double-next` && arr[i + 1] !== undefined && i != arr.length - 1){
      arr1.push(arr[i + 1]);
    }
  else if(arr[i] == `--double-prev` && arr[i - 1] !== undefined && i !== 0){
      arr1.push(arr[i - 1]);
    }
  else {
    arr1.push(arr[i])
  }
}
return arr1;
};
