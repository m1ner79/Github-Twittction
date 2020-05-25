const Twitter = require('twitter-lite');
const core = require('@actions/core');
const { readFileSync } = require("fs");
//const { validateInput} = require("./src/utils");
const { postTweets} = require("./src/tweety");

const client = new Twitter({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token_key: access_token_key,
  access_token_secret: access_token_secret
});

const consumer_key = core.getInput('twitter_consumer_key', { required: true }) || process.env.TWITTER_CONSUMER_KEY;
const consumer_secret = core.getInput('twitter_consumer_secret', { required: true }) || process.env.TWITTER_CONSUMER_SECRET;
const access_token_key = core.getInput('twitter_access_token_key', { required: true }) || process.env.TWITTER_ACCESS_TOKEN_KEY;
const access_token_secret = core.getInput('twitter_access_token_secret', { required: true }) || process.env.TWITTER_ACCESS_TOKEN_SECRET;
const message = core.getInput('twitter_status');
const payload = JSON.parse(
  readFileSync(process.env.GITHUB_EVENT_PATH, "utf8")
);


let tweetingStatus;

switch (process.env.GITHUB_EVENT_NAME) {
  case "push":
    tweetingStatus = message || `${payload.pusher.name} just created a commit to ${payload.repository.full_name}. More details are available here: ${payload.commits[0].url}`;
    break;
  case "pull_request":
    tweetingStatus = message || `${payload.pull_request.head.repo.full_name} just created a pull request: ${payload.pull_request.title}. More info is available here: ${payload.pull_request.html_url}`;
    break;
  case "release":
    tweetingStatus = message || `A new release ${payload.release.tag_name} in ${payload.repository.full_name}. More details are available here ${payload.release.html_url}`;
    break;
  default:
    if (message) {
      tweetingStatus = message;
    } else {
      throw new Error(`${process.env.GITHUB_EVENT_NAME} is not supported with default message. Provide custom message using tweeter_status input parameter.`);
    }
    break;
}

const paramPost = {status: tweetingStatus};


function getServerResponse(p){
  console.log(p.data.id, p.text, p.created_at);
}


//getTweets(params).then((m)=>{getServerResponse(m[0])});
postTweets(client, paramPost).then((res)=>{
  core.debug(res.id)
}).catch((error)=>{
  core.error
});

