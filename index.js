const Twitter = require('twitter-lite');
const core = require('@actions/core');
const { readFileSync } = require("fs");


const consumer_key = core.getInput('twitter_consumer_key');
const consumer_secret = core.getInput('twitter_consumer_secret');
const access_token_key = core.getInput('twitter_access_token_key');
const access_token_secret = core.getInput('twitter_access_token_secret');


const client = new Twitter({
    consumer_key: consumer_key || process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: consumer_secret || process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: access_token_key || process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: access_token_secret || process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
 
//const params = {screen_name: 'derberq'};

//function myFunction(m){
 // console.log(m[0].id, m[0].text);
//}

/*async function getTweets(p){
  try{
    return await client.get('statuses/user_timeline', p);
  }
  catch(e){
    console.log(e);
  }
  
}*/

const payload = JSON.parse(
  readFileSync(process.env.GITHUB_EVENT_PATH, "utf8")
);

const tweetingStatus = "GitHub Action tweeting: " + payload.commits[0].message;

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

