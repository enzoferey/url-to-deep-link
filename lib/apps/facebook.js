import { ANDROID_TARGET, IOS_TARGET } from "../index";

const facebook = (href, target) => {
  const pageId = href.split(".com/")[1];

  if (target === ANDROID_TARGET) {
    return `intent://#Intent;package=com.facebook.katana;scheme=fb://page/${pageId}?referrer=app_link;end`;
  } else if (target === IOS_TARGET) {
    return `fb://profile/${pageId}`;
  }
};

export default facebook;

/* ASYNC VERSION TO GET PAGE ID, MAYBE FUTURE ?

const facebook = async (href, target) => {
  const pageName = href.split(".com/")[1];

  try {
    const pageContent = await axios.get(`https://www.facebook.com/${pageName}`);

    const pageId = pageContent.data.match(/"pageID":"([0-9]*)"/)[1];

    if (target === ANDROID_TARGET) {
      return `intent://#Intent;package=com.facebook.katana;scheme=fb://page/${pageId}?referrer=app_link;end`;
    } else if (target === IOS_TARGET) {
      return `fb://profile/${pageId}`;
    }
  } catch (e) {
    return "An error happent while getting the facebook page id";
  }
};

*/
