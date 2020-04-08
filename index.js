const Twitter = require('twitter-lite');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
 
const params = {screen_name: 'derberq'};

async function getTweets(p){
  await client.get('statuses/user_timeline', p)
}

//await getTweets(params);

//const tweets = await client.get('statuses/user_timeline', params)
//getTweets(params);

//console.log(getTweets(params)