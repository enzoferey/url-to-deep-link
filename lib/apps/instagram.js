import { ANDROID_TARGET, IOS_TARGET } from "../index";

const instagram = (href, target) => {
  const afterDomain = href.split(".com/")[1];
  const isPhoto = afterDomain.includes("p/");

  if (target === ANDROID_TARGET) {
    if (isPhoto) {
      return `intent://instagram.com/${afterDomain}#Intent;package=com.instagram.android;scheme=https;end`;
    }
    // profile
    return `intent://instagram.com/_u/${afterDomain}#Intent;package=com.instagram.android;scheme=https;end`;
  } else if (target === IOS_TARGET) {
    if (isPhoto) {
      return "We do not support this at the moment";
    }
    // profile
    return `instagram://user?username=${afterDomain}`;
  }
};

export default instagram;
