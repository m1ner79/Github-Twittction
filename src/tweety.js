async function postTweets(client, p){
    try{
      return await client.post('statuses/update', p);
    }
    catch(error){
      console.log('post failed', error);
    }
}
module.exports.postTweets = postTweets;