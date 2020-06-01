/**
   * Post tweet on users timeline.
   *
   * @param  {Object} client Twitter api client.
   * @param  {Object} p Object containing statust property with Twitter message.
   * @return {Promise[Object]} 
   */
async function postTweets(client, p) {
  try {
    return await client.post('statuses/update', p);
  } catch (error) {
    console.log('post failed', error);
  }
}
module.exports.postTweets = postTweets;