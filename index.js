const Twitter = require('twitter-lite');
const core = require('@actions/core');
const { readFileSync } = require("fs");
const { postTweets } = require("./src/tweety");
const { getDefaultMessage } = require("./src/utils");

const consumer_key = core.getInput('twitter_consumer_key', { required: true }) || process.env.TWITTER_CONSUMER_KEY;
const consumer_secret = core.getInput('twitter_consumer_secret', { required: true }) || process.env.TWITTER_CONSUMER_SECRET;
const access_token_key = core.getInput('twitter_access_token_key', { required: true }) || process.env.TWITTER_ACCESS_TOKEN_KEY;
const access_token_secret = core.getInput('twitter_access_token_secret', { required: true }) || process.env.TWITTER_ACCESS_TOKEN_SECRET;

const message = core.getInput('twitter_status');

const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
});

const payload = JSON.parse(
  readFileSync(process.env.GITHUB_EVENT_PATH, "utf8")
);

const tweetingStatus  = message || getDefaultMessage(process.env.GITHUB_EVENT_NAME, payload);

const paramPost = {status: tweetingStatus};

postTweets(client, paramPost)
  .then((resp)=>{core.info(`Your tweet is posted here: https://twitter.com/${resp.user.screen_name}/status/${resp.id_str}`)})
  .catch((err)=>{throw new Error(err.message)});

