const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  
  let fin = [];
  
  for (let i = 0; i < members.length; i++){
  if (typeof(members[i]) === 'string') {fin.push(members[i][0].trim().toUpperCase())
     } 
  }
    
  return fin.sort().join('');
}
