const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (!Array.isArray(arr)) {
  	throw new Error();
  }

	let mArr = [...arr];
  
  for (let i = 0; i < mArr.length; i++) {
  	if (mArr[i] == '--discard-next') {
    	mArr.splice(i, 2);
    }
    
    else if (mArr[i] == '--discard-prev') {
    	mArr.splice(i - 1, 2);
    }
    
    else if (mArr[i] == '--double-next') {
    	mArr[i] = mArr[i + 1];
    }
    
    else if (mArr[i] == '--double-prev') {
    	mArr[i] = mArr[i - 1]
    }
  }
  
  return mArr;
}

