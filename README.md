# Twitter github action

This action will post on twitter every time there is push/pull request on a github repository.

## Example usage

name: 'testing workflow'

on: push
  
jobs:
  test:
    name: somethingDope
    runs-on: ubuntu-latest
    steps:
      - uses: here you will reference your own action
        with:
            TWITTER_CONSUMER_KEY: here you will enter your own twitter_consumer_key
            TWITTER_CONSUMER_SECRET: here you will enter your own twitter_consumer_secret
            TWITTER_ACCESS_TOKEN_KEY: here you will enter your own twitter_access_token_key
            TWITTER_ACCESS_TOKEN_SECRET: here you will enter your own twitter_access_token_secret