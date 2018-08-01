describe("twitter(href, target)", () => {
  /* ANDROID */
  describe("when called for an android deep link to a profile", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.twitter(
        "https://www.twitter.com/enzo_ferey",
        ANDROID_TARGET
      );
      expect(deeplink).to.equal(
        "intent://twitter.com/enzo_ferey#Intent;package=com.twitter.android;scheme=https;end"
      );
    });
  });
  describe("when called for an android deep link to a tweet", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.twitter(
        "https://twitter.com/enzo_ferey/status/1007387756077690880",
        ANDROID_TARGET
      );
      expect(deeplink).to.equal(
        "intent://twitter.com/enzo_ferey/status/1007387756077690880#Intent;package=com.twitter.android;scheme=https;end"
      );
    });
  });

  /* IOS */
  describe("when called for an ios deep link to a profile", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.twitter(
        "https://www.twitter.com/enzo_ferey",
        IOS_TARGET
      );
      expect(deeplink).to.equal("twitter://user?screen_name=enzo_ferey");
    });
  });
  describe("when called for an ios deep link to a tweet", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.twitter(
        "https://twitter.com/enzo_ferey/status/1007387756077690880",
        IOS_TARGET
      );
      expect(deeplink).to.equal("twitter://status?id=1007387756077690880");
    });
  });
});
