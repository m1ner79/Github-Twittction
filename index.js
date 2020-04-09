const Twitter = require('twitter-lite');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
 
const params = {screen_name: 'derberq'};

function myFunction(m){
  console.log(m[0].id, m[0].text);
}

async function getTweets(p){
  try{
    return await client.get('statuses/user_timeline', p);
  }
  catch(e){
    console.log(e);
  }
  
}


getTweets(params).then(myFunction);

