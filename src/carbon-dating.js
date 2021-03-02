const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const C = 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof(sampleActivity) !== 'string' || 'NaN') ||
      sampleActivity > MODERN_ACTIVITY ||
      sampleActivity > HALF_LIFE_PERIOD ||
      sampleActivity <= 0) return false;
      
  sampleActivity = Number.parseFloat(sampleActivity);
  
  const k = 0.693 / HALF_LIFE_PERIOD;
  
  return Math.ceil(Math.log(MODERN_ACTIVITY/ sampleActivity) / k)
  
}
