const Twitter = require('twitter-lite');
const core = require('@actions/core');
const { readFileSync } = require("fs");


const consumer_key = core.getInput('twitter_consumer_key') || process.env.TWITTER_CONSUMER_KEY;
const consumer_secret = core.getInput('twitter_consumer_secret') || process.env.TWITTER_CONSUMER_SECRET;
const access_token_key = core.getInput('twitter_access_token_key') || process.env.TWITTER_ACCESS_TOKEN_KEY;
const access_token_secret = core.getInput('twitter_access_token_secret') || process.env.TWITTER_ACCESS_TOKEN_SECRET;

const message = core.getInput('twitter_status');
const defaultMessage = `${payload.commits[0].author.name} just created a commit: ${payload.commits[0].message}. More info is available here: ${payload.commits[0].url}`;


const payload = JSON.parse(
  readFileSync(process.env.GITHUB_EVENT_PATH, "utf8")
);

const tweetingStatus = message ? message : defaultMessage;

console.log(tweetingStatus);

//validating twitter cridentials
function validateInput(inputValue){
  if (!inputValue) core.setFailed(`${inputValue} is missing!`);
}

validateInput(consumer_key);
validateInput(consumer_secret);
validateInput(access_token_key);
validateInput(access_token_secret);


const client = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: access_token_key,
    access_token_secret: access_token_secret
  });


const paramPost = {status: tweetingStatus};

async function postTweets(p){
  try{
    return await client.post('statuses/update', p);
  }
  catch(e){
    console.log(e);
  }
}

function getServerResponse(p){
  console.log(p.id, p.text, p.created_at);
}


//getTweets(params).then((m)=>{getServerResponse(m[0])});
postTweets(paramPost).then(getServerResponse);

