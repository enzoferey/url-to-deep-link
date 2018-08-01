export const ANDROID_TARGET = "android";
export const IOS_TARGET = "ios";

import apps from "./apps";

export const getApp = href => {
  const appRgx = /([a-zA-z]*).com/;

  return href.match(appRgx)[1];
};

export const getAndroidDeepLink = href => {
  const app = getApp(href);
  if (app) {
    return apps[app](href, ANDROID_TARGET);
  }

  return "Not supported Android app";
};

export const getIOSDeepLink = href => {
  const app = getApp(href);
  if (app) {
    return apps[app](href, IOS_TARGET);
  }

  return "Not supported iOS app";
};

console.log(getAndroidDeepLink("twitter.com/enzo_ferey"));
console.log(getIOSDeepLink("twitter.com/enzo_ferey"));

/*
// Facebook
"android-app://com.facebook.katana/https/facebook.com/enzo.ferey.9"
""
"https://www.facebook.com/enzo.ferey.9"

// Twitter
"android-app://com.twitter.android/https/twitter.com/enzo_ferey"
"twitter://user?screen_name=enzo_ferey"
"https://www.twitter.com/enzo_ferey"

// Instagram
"android-app://com.instagram.android/https/instagram.com/enzo_ferey",
"instagram://user?username=enzo_ferey",
"https://www.instagram.com"

// Medium
"android-app://com.medium.reader/https/medium.com/p/e736460a8cd4"
""
"https://www.medium.com/"
*/
