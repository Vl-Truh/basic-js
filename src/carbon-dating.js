const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof(sampleActivity) !== 'string') ||
      Number.parseFloat(sampleActivity) > MODERN_ACTIVITY ||
      Number.parseFloat(sampleActivity) <= 0) return false;
      
  sampleActivity = Number.parseFloat(sampleActivity);
  
  const k = 0.693 / HALF_LIFE_PERIOD;
  
  return Math.ceil(Math.log(MODERN_ACTIVITY/ sampleActivity) / k)
  
}
