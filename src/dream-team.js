const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let abr = [];
  for(let i = 0; i < members.length; i++){
   if (typeof members[i] === 'string'){
    members[i] = members[i].trim();
  abr.push(members[i].charAt(0).toUpperCase());
 }
  }
  return abr.sort().join().replace(/\,/g, '');
};
