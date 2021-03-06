const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (!Array.isArray(arr)) {
  	throw new Error();
  }

	let mArr = [...arr];
  
  for (let i = 0; i < mArr.length; i++) {
    if ((mArr[i] == '--discard-next') && i + 1 <= mArr.length - 1) {
    	mArr.splice(i, 2);
    }
	  
    else if ((mArr[i] == '--discard-next') && i + 1 > mArr.length - 1) {
    	mArr.splice(i, 1);
    }
    
    else if ((mArr[i] == '--discard-prev') && i - 1 >= 0) {
    	mArr.splice(i - 1, 2);
    }
	  
    else if ((mArr[i] == '--discard-prev') && i - 1 < 0) {
    	mArr.splice(i, 1);
    }
    
    else if ((mArr[i] == '--double-next') && i + 1 <= mArr.length - 1) {
    	mArr[i] = mArr[i + 1];
    }
   
    else if ((mArr[i] == '--double-next') && i + 1 > mArr.length - 1) {
    	mArr.splice(i, 1);
    }
	  
    else if ((mArr[i] == '--double-prev') && i - 1 >= 0) {
    	mArr[i] = mArr[i - 1]
    }
	  
    else if ((mArr[i] == '--double-prev') && i - 1 < 0) {
        mArr.splice(i, 1);
    }
  }
  
  return mArr;
}

