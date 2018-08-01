import { ANDROID_TARGET, IOS_TARGET } from "../index";

const twitter = (href, target) => {
  const afterDomain = href.split(".com/")[1];

  if (target === ANDROID_TARGET) {
    return `intent://twitter.com/${afterDomain}#Intent;package=com.twitter.android;scheme=https;end`;
  } else if (target === IOS_TARGET) {
    if (afterDomain.includes("/status")) {
      const id = afterDomain.split("status/")[1];
      return `twitter://status?id=${id}`;
    } else {
      const userName = afterDomain;
      return `twitter://user?screen_name=${userName}`;
    }
  }
};

export default twitter;
