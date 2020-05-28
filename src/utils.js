//validating twitter cridentials
function defaultMessages(ts, inputName){
    if (inputValue) return;
  
    core.setFailed(`${inputName} is missing!`);
    throw new Error("input missing");
  }

  module.exports.defaultMessages = defaultMessages;