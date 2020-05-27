![twittergithubaction logo](img/tgalogo.png)
# Twitter Github Actions

> :warning: Please, use it only at your own risk. This is very early stage development and on top of that - I am a very inexperienced programmer.

<!-- toc -->



<!-- tocstop -->

## Overview

This action will post on twitter every time there is a supported event on a github repository.

## Motivation

I am using this project to hone my coding skills. I have some but they are not the greatest. I believe that with help of my brother/mentor, this project could be a stepping stone towards my new career.



## How to use


## License

MIT

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