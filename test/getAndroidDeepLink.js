import { getAndroidDeepLink } from "../lib";

describe("getAndroidDeepLink()", () => {
  describe("when called with a non supported app name", () => {
    it("should return undefined", () => {
      const deeplink = getAndroidDeepLink("https://www.habak.com");
      expect(deeplink).to.equal(undefined);
    });
  });

  describe("when called with a supported app name", () => {
    it("should act as wrapper for apps scripts", () => {
      let href = "https://www.twitter.com/enzo_ferey";
      let deeplink = getAndroidDeepLink(href);
      let deeplinkScript = apps.twitter(href, ANDROID_TARGET);
      expect(deeplink).to.equal(deeplinkScript);

      href = "https://www.instagram.com/enzo_ferey";
      deeplink = getAndroidDeepLink(href);
      deeplinkScript = apps.instagram(href, ANDROID_TARGET);
      expect(deeplink).to.equal(deeplinkScript);
    });
  });
});
