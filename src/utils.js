//validating twitter cridentials
function validateInput(inputValue, inputName){
    if (inputValue) return;
  
    core.setFailed(`${inputName} is missing!`);
    throw new Error("input missing");
  }

  module.exports.validateInput = validateInput;