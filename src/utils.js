/**
   * Select which default message should be posted.
   *
   * @param  {String} eventName Name of GitHub event.
   * @param  {Object} payload Payload of GitHub event.
   * @return {String} 
   */
function getDefaultMessage(eventName, payload) {
  let tweetingStatus;
  switch (eventName) {
  case 'push':
    tweetingStatus = `${payload.pusher.name} just created a commit to ${payload.repository.full_name}. More details are available here: ${payload.commits[0].url}`;
    break;
  case 'pull_request':
    tweetingStatus = `${payload.pull_request.head.repo.full_name} just created a pull request: ${payload.pull_request.title}. More info is available here: ${payload.pull_request.html_url}`;
    break;
  case 'release':
    tweetingStatus = `A new release ${payload.release.tag_name} in ${payload.repository.full_name}. More details are available here ${payload.release.html_url}`;
    break;
  default:
    throw new Error(`${eventName} is not supported with default message. Provide custom message using tweeter_status input parameter.`);
    break;
  }
  return tweetingStatus;
} 
module.exports.getDefaultMessage = getDefaultMessage;