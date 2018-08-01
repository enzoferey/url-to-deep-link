# url-to-deep-link [![Build Status](https://travis-ci.org/enzoferey/url-to-deep-link.svg?branch=master)](https://travis-ci.org/enzoferey/url-to-deep-link)

Transform URLs to Deep Links and open your users apps

#### Why ?

Deep links are a very powerful feature of Android and iOS devices that allows creators to point their users to the content with the best experience possible.

Looking for a way to redirect users throught a basic `<a>` html link tag, I found out that no library does the conversion from a URL to a deep link. There was an [attempt](https://github.com/hampusohlsson/browser-deeplink) 4 years ago that wasn't still what I was looking for and [another one](https://github.com/mderazon/node-deeplink) more recent but that works using a Node server and still doesn't exactly do what I was looking for: just transform URLs to deep links.

Following on with the research some services like [Branch.io](https://branch.io/) and [Url Geni](https://app.urlgeni.us/) exist but they are premium. Branch is hard to try because you need to request a demo, which I asked for but I haven't got any answer back yet. On the other hand Url Geni gives you a quick way to see it working in their home page and later on with a subscription you are able to generate URLs dinamically using their API.

Since [universal links](https://developer.apple.com/ios/universal-links/) are still not a standard nor all the apps support them nor all version of Android and iOS support them, I decided to create this library.

`url-to-deep-link` is a simple hardcoded solutions that translates URLs to their deep link version in order to open your users apps.

## Install

`npm install --save url-to-deep-link`

## Usage

```js
import { getAndroidDeepLink, getIOSDeepLink } from "url-to-deep-link";

const yourAndroidDeepLink = getAndroindDeepLink("YOUR URL");
const yourIOSDeepLink = getIOSDeepLink("YOUR URL");
```

At this moment the following transformations are available:

### Facebook

- #### Page

`https://www.facebook.com/YOUR_PAGE_ID`

### Instagram

- #### Profile

`https://www.instagram.com/YOUR_USERNAME`

- #### Post (ONLY ANDROID)

`https://www.instagram.com/p/YOUR_POST_ID`

### Twitter

- #### Profile

`https://www.twitter.com/YOUR_USERNAME`

- #### Tweet

`https://twitter.com/YOUR_USERNAME/status/YOUR_TWEET_ID`

## Test

`npm run test`

## Build (webpack)

`npm run build`

## License

MIT
