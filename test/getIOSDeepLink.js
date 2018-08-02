import { getIOSDeepLink } from "../lib";

describe("getIOSDeepLink()", () => {
  describe("when called with a non supported app name", () => {
    it("should return undefined", () => {
      const deeplink = getIOSDeepLink("https://www.habak.com");
      expect(deeplink).to.equal(undefined);
    });
  });

  describe("when called with a supported app name", () => {
    it("should act as wrapper for apps scripts", () => {
      let href = "https://www.twitter.com/enzo_ferey";
      let deeplink = getIOSDeepLink(href);
      let deeplinkScript = apps.twitter(href, IOS_TARGET);
      expect(deeplink).to.equal(deeplinkScript);

      href = "https://www.instagram.com/enzo_ferey";
      deeplink = getIOSDeepLink(href);
      deeplinkScript = apps.instagram(href, IOS_TARGET);
      expect(deeplink).to.equal(deeplinkScript);
    });
  });
});
