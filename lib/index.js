export const ANDROID_TARGET = "android";
export const IOS_TARGET = "ios";

import apps from "./apps";

export const getApp = href => {
  const appRgx = /([a-zA-z]*).com/;
  const match = href.match(appRgx);
  if (match && match.length > 1) return match[1];
};

export const getAndroidDeepLink = href => {
  const app = getApp(href);
  if (Object.keys(apps).includes(app)) {
    return apps[app](href, ANDROID_TARGET);
  }
};

export const getIOSDeepLink = href => {
  const app = getApp(href);
  if (Object.keys(apps).includes(app)) {
    return apps[app](href, IOS_TARGET);
  }
};

/*
// Medium
"android-app://com.medium.reader/https/medium.com/p/e736460a8cd4"
""
"https://www.medium.com/"
*/
