describe("instagram(href, target)", () => {
  /* ANDROID */
  describe("when called for an android deep link to a profile", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.instagram(
        "https://www.instagram.com/enzo_ferey",
        ANDROID_TARGET
      );
      expect(deeplink).to.equal(
        "intent://instagram.com/_u/enzo_ferey#Intent;package=com.instagram.android;scheme=https;end"
      );
    });
  });
  describe("when called for an android deep link to a photo", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.instagram(
        "https://www.instagram.com/p/BlL4dWAHjca",
        ANDROID_TARGET
      );
      expect(deeplink).to.equal(
        "intent://instagram.com/p/BlL4dWAHjca#Intent;package=com.instagram.android;scheme=https;end"
      );
    });
  });

  /* IOS */
  describe("when called for an ios deep link to a profile", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.instagram(
        "https://www.instagram.com/enzo_ferey",
        IOS_TARGET
      );
      expect(deeplink).to.equal("instagram://user?username=enzo_ferey");
    });
  });
  describe("when called for an ios deep link to a photo", () => {
    it("should return the URL wrapper", () => {
      const deeplink = apps.instagram(
        "https://www.instagram.com/p/BlL4dWAHjca",
        IOS_TARGET
      );
      expect(deeplink).to.equal(undefined);
    });
  });
});
