const Twitter = require('twitter-lite');
const core = require('@actions/core');
const { readFileSync } = require("fs");
const { validateInput} = require("./src/utils");
const { postTweets} = require("./src/tweety");

const consumer_key = core.getInput('twitter_consumer_key') || process.env.TWITTER_CONSUMER_KEY;
const consumer_secret = core.getInput('twitter_consumer_secret') || process.env.TWITTER_CONSUMER_SECRET;
const access_token_key = core.getInput('twitter_access_token_key') || process.env.TWITTER_ACCESS_TOKEN_KEY;
const access_token_secret = core.getInput('twitter_access_token_secret') || process.env.TWITTER_ACCESS_TOKEN_SECRET;

const payload = JSON.parse(
  readFileSync(process.env.GITHUB_EVENT_PATH, "utf8")
);

const message = core.getInput('twitter_status');
//const defaultCommitMessage = `${payload.commits[0].author.name} just created a commit: ${payload.commits[0].message}. More info is available here: ${payload.commits[0].url}`;

let tweetingStatus;

switch (process.env.GITHUB_EVENT_NAME) {
  case "push":
    tweetingStatus = message || `${payload.pusher.name} just created a push. More details are available here: ${payload.commits[0].url}`;
    break;
  case "pull_request":
    tweetingStatus = message || `${payload.pull_request.repo.full_name} just created a pull request: ${payload.pull_request.title}. More info is available here: ${payload.pull_request.url}`;
    break;
  case "release":
    tweetingStatus = message || `${payload.release.author.login} just published a new release ${payload.release.tag_name}. More details are available here: ${payload.release.url}`;
    break;
  default:
    if (message) {
      tweetingStatus = message;
    } else {
      throw new Error(`${process.env.GITHUB_EVENT_NAME} is not supported with default message. Provide custom message using tweeter_status input parameter.`);
    }
    break;
}

validateInput(consumer_key, "consumer_key");
validateInput(consumer_secret, "consumer_secret");
validateInput(access_token_key, "access_token_key");
validateInput(access_token_secret, "access_token_secret");


const client = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: access_token_key,
    access_token_secret: access_token_secret
  });


const paramPost = {status: tweetingStatus};


function getServerResponse(p){
  console.log(p.id, p.text, p.created_at);
}


//getTweets(params).then((m)=>{getServerResponse(m[0])});
postTweets(client, paramPost).then(getServerResponse);

