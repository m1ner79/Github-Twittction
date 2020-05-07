const Twitter = require('twitter-lite');
const core = require('@actions/core');
const { readFileSync } = require("fs");


const consumer_key = core.getInput('twitter_consumer_key') || process.env.TWITTER_CONSUMER_KEY;
const consumer_secret = core.getInput('twitter_consumer_secret') || process.env.TWITTER_CONSUMER_SECRET;
const access_token_key = core.getInput('twitter_access_token_key') || process.env.TWITTER_ACCESS_TOKEN_KEY;
const access_token_secret = core.getInput('twitter_access_token_secret') || process.env.TWITTER_ACCESS_TOKEN_SECRET;
//console.log(consumer_key);

//validating twitter cridentials

// function twitterValidator(){
//   consumer_key = ck;
//   consumer_secret = cs;
//   access_token_key = atk;
//   access_token_secret = ats;

//   if(ck, cs, atk, ats != undefined){
//     console.log("Your twitter credentials were successfully verified.")
//   }else{
//     alert(
//         `${ck, cs, atk, ats} is not valid.`
//     );
//     return false;
//   }
// }

if (consumer_key == undefined){
  console.log("Couldn't validate your consumer_key!");
} else{
  console.log("Successfull verification!")
}

if (consumer_secret == undefined){
  console.log("Couldn't validate your consumer_secret!");
} else{
  console.log("Successfull verification!")
}

if (access_token_key == undefined){
  console.log("Couldn't validate your access_token_key!");
} else{
  console.log("Successfull verification!")
}

if (access_token_secret == undefined){
  console.log("Couldn't validate your access_token_secret!");
} else{
  console.log("Successfull verification!")
}


/*
const client = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: access_token_key,
    access_token_secret: access_token_secret
  });

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

*/