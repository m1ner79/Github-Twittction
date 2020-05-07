# Twitter github action

This action will post on twitter every time there is an event on a github repository.

## Warning!

Please use it only at your own risk. This is very early stage development and on top of that I am a very inexperienced programmer.

### Example usage

```md
name: 'testing workflow'
on: push
  
jobs:
  test:
    name: somethingDope
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ./
        with:
            twitter_consumer_key: here you will enter your own twitter_consumer_key
            twitter_consumer_secret: here you will enter your own twitter_consumer_secret
            twitter_access_token_key: here you will enter your own twitter_access_token_key
            twitter_access_token_secret: here you will enter your own twitter_access_token_secret
```