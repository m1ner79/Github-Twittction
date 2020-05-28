![Github Twittction logo](img/twitter_header_photo_2.png)
# Github Twittction

> :warning: Please, use it only at your own risk. This is very early stage development and on top of that - I am a very inexperienced programmer.

<!-- toc -->

- [Overview](#overview)
- [Motivation](#motivation)
- [What do you need?](#what-do-you-need)
- [Requirements](#requirements)
  * [Example usage](#example-usage)
- [Contributing](#contributing)
- [License](#license)

<!-- tocstop -->

## Overview

This action will post on twitter every time there is a supported event on a github repository. </br>
Currently the app supports these events: push, pull_request and release.

## Motivation

I am using this project to hone my coding skills. I have some but they are not the greatest. I believe that with help of my brother/mentor :heart_eyes:, this project could be a stepping stone towards my new career.

## What do you need?

First. You need to go here [https://developer.twitter.com/en/apps] and create an app.</br>
Now that you have an app, you need to click on details and then select tab "Keys and tokens".
You will need Consumer API keys and also you need to generate Acces token & access token secret.</br>
Copy your keys and tokens and then go to the github repo you wish to brag about on twitter. Select settings tab and then click on Secrets (on your left).
Press "New secret" to add your keys and tokens and you are almost ready. 

## Requirements

* Node.js v12.16+
* npm v6.14.4+

```sh
npm install @actions/core
npm install twitter_lite
```

## Example usage

```sh
name: 'testing workflow'
# Trigger on push, pull_request, release
on: 
  push:
    branches:
      - master
  pull_request:
    types:
      - opened
  release:
    types: 
      - published
jobs:
  test:
    name: posting_on_twitter
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ./
        with:
            twitter_status: "ℍ𝕖𝕪 𝕪𝕠𝕦! 👋 𝕎𝕖 ${{ github.event.repository.owner.name}} 𝕙𝕒𝕧𝕖 𝕒 𝕟𝕖𝕨 𝕔𝕠𝕞𝕞𝕚𝕥 𝕚𝕟 𝕥𝕙𝕖 𝕞𝕒𝕤𝕥𝕖𝕣 𝕓𝕣𝕒𝕟𝕔𝕙 🥳 \n 𝕀𝕥𝕤 𝕟𝕒𝕞𝕖 𝕚𝕤 ${{ github.event.commits[0].message }} 😱 \n ℂ𝕙𝕖𝕔𝕜 𝕚𝕥 𝕠𝕦𝕥 𝕙𝕖𝕣𝕖 👇 \n ${{ github.event.commits[0].url }}"
            twitter_consumer_key: ${{ secrets.TWITTER_CONSUMER_KEY }} 
            twitter_consumer_secret: ${{ secrets.TWITTER_CONSUMER_SECRET }} 
            twitter_access_token_key: ${{ secrets.TWITTER_ACCESS_TOKEN_KEY }} 
            twitter_access_token_secret: ${{ secrets.TWITTER_ACCESS_TOKEN_SECRET }} 
```

As you can see :point_down:
```sh
twitter_status:
```
allowes user to create a custom twitter post.

I used these two websites:
* [https://lingojam.com/TwitterFonts] 
* [https://www.piliapp.com.twitter-symbols/]

to create my post. Go nuts and make it as sparkly as you like (just remember about twitter character limitations [https://developer.twitter.com/en/docs/basics/counting-characters]). 

If you don't have a custom message and supported event is triggered, then one of these default messages will be posted on your twitter timeline:
```sh
let tweetingStatus;
//defaultMessages

switch (process.env.GITHUB_E1265750786157547500_name}. More details are available here: ${payload.commits[0].url}`;
    break;
  case "pull_request":
    tweetingStatus = message || `${payload.pull_request.head.repo.full_name} just created a pull request: ${payload.pull_request.title}. More info is available here: ${payload.pull_request.html_url}`;
    break;
  case "release":
    tweetingStatus = message || `A new release ${payload.release.tag_name} in ${payload.repository.full_name}. More details are available here ${payload.release.html_url}`;
    break;
  default:
    if (message) {
      tweetingStatus = message;
    } else {
      throw new Error(`${process.env.GITHUB_EVENT_NAME} is not supported with default message. Provide custom message using tweeter_status input parameter.`);
    }
    break;
}
```
## Contributing 

Contributions ar more than welcome :handshake:.

## License

MIT